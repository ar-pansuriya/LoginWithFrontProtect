import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, getFromLocalstorage, saveToLocalstorage } from "./TaskSlice";

export default function Form() {

  const [isEditID, setIsEditID] = useState("");
  const [task, setTask] = useState("");
//dispatch and useselector hook from redux toolkit
  const dispatch = useDispatch();
  const Tasks = useSelector((state) => state.tasks.tasks);

// get all task when page is reload
useEffect(()=>{
dispatch(getFromLocalstorage());
},[])

//add tasks functionality
  const handleAdd = () => {
    //check Add or Edit 
    if (isEditID !== "") {
      dispatch(editTask({ task, isEditID }));
      setTask("");
      setIsEditID("");
      //save and 
      dispatch(saveToLocalstorage());
    } else {
      //if input is empty at add tasks time show alert
      if (task === "") {
        alert("Please add task");
      } else {
        dispatch(addTask(task));
        setTask("");
        //save updated date to localstorage
        dispatch(saveToLocalstorage());
      }
    }
  };

//edit tasks functionality 
//to get id of specific task that is for edit by using callback function
//pass this function as a props to child componenet 
  function edittask(id) {
    let editTaskTitle = Tasks.find((item) => item.id === id);
    setTask(editTaskTitle.title);
    setIsEditID(id);
  }

  return (
    <>
      <h1>Task Manager Using Redux Toolkit</h1>
      <h5 className="text-primary">Add Task Below i have used CURD Operations and localstorage concept to save all tasks</h5>
      <div className="d-flex flex-column align-items-center gap-4 ">
        <div className="d-flex gap-3">
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="px-2"
            type="text"
            placeholder="add task here"
          />
          <button onClick={handleAdd}>
            {isEditID !== "" ? "Edit" : "Add"}
          </button>
        </div>
        <ul className="d-flex flex-column gap-2 align-items-center justify-content-center  row">
          {Tasks.map((task) => (
            <TaskList
              key={task.id}
              id={task.id}
              edittask={edittask}
              task={task.title}
            ></TaskList>
          ))}
        </ul>
      </div>
    </>
  );
}
