import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, saveToLocalstorage } from "./TaskSlice";


export default function TaskList(props) {

  const dispatch = useDispatch();

//deleete task functionality using redux toolkit diapatch and useSelector
  function handleDelete() {
    dispatch(deleteTask(props.id));
    //update task on localstorage when deleting task
    dispatch(saveToLocalstorage());
  }
//edit task title set directly to input to edit task by callback function
  function handleEdit() {
    //call that parents component functions and send id
    props.edittask(props.id);
  }

  return (
    <div className=" d-flex align-items-center gap-2 ">
      <p
        style={{ width: "300px" }}
        className="border rounded border-dark-subtle m-0 px-4 py-2 col-6"
      >
        {props.task}
      </p>
      <button className="bg-danger" onClick={handleDelete}>
        delete
      </button>
      <button className="bg-primary" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
