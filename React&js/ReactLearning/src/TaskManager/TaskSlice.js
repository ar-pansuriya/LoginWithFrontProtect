import { createSlice, nanoid } from '@reduxjs/toolkit'

//define initial state
const initialState = {
    tasks: [{ title: 'Go to sleep', id: nanoid() }, { title: 'Play Cricket', id: nanoid() },{ title: 'Read Books', id: nanoid() }],
}

//actions and reducers combine
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        //add task functionality action
        addTask: (state, actions) => {
            let obj = { title: actions.payload, id: nanoid() }
            state.tasks.push(obj)
        },
        //delete task functionality action
        deleteTask: (state, actions) => {
            state.tasks = state.tasks.filter((task) => task.id !== actions.payload);
        },
        //edit task functionality action
        editTask: (state, actions) => {
            console.log(actions.payload);
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === actions.payload.isEditID) {
                    return {
                        ...task, title: actions.payload.task,
                    };
                } else {
                    return task;
                }
            });
            state.tasks = updatedTasks
        },
        //save all tasks to local storage action
        saveToLocalstorage: (state) => {
            localStorage.setItem('task', JSON.stringify(state.tasks));
        },
        //get all task from local storage when page is reload to componenet rerender 
        getFromLocalstorage: (state) => {
            const allTasks = localStorage.getItem('task');
            const parsedTasks = JSON.parse(allTasks);
            return {
                ...state,
                tasks: parsedTasks || [],
            };
        }
    }
});

// export all actions 
export const { addTask, deleteTask, editTask, saveToLocalstorage, getFromLocalstorage } = taskSlice.actions
// export reducer
export default taskSlice.reducer