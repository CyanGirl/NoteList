import { add, subtract } from "./Actions/actioncreator";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import ToDo from "./ToDo";

const Count = () => {
  const counter = useSelector(state => state.count);
  const Dispatch = useDispatch();

  return (
    <div className="list">
      <h4> COUNTER = {counter}</h4>
      <button
        className="button"
        onClick={() => {
          Dispatch(add());
        }}
      >
        Increase
      </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => {
          Dispatch(subtract());
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Count;
