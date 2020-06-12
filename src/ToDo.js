import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList, RemToList, Reset } from "../src/Actions/actioncreator";
import "./styles.css";

const ToDo = () => {
  const [val, setVal] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setVal(e.target.value);
  };

  const list = useSelector(state => state.toDo);
  const dispatch = useDispatch();

  return (
    <div className="list">
      <h3>Your List</h3>
      {list.map((bug, key) => (
        <div className="h6">
          <span>{bug.id}</span>
          <span> {bug.description}</span>
        </div>
      ))}
      <br />
      <input type="text" value={val} onChange={handleChange} />
      <br />
      <br />
      <button onClick={() => (val !== "" ? dispatch(addToList(val)) : "")}>
        New Note?
      </button>

      <button onClick={() => (val !== "" ? dispatch(RemToList(val)) : "")}>
        Remove with ID
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};

export default ToDo;
