import { logIn, logOut } from "./Actions/actioncreator";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

const Log = () => {
  const log = useSelector(state => state.log);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{!log ? "Please get started" : ""}</h2>
      <button onClick={() => dispatch(!log ? logIn() : logOut())}>
        {!log ? "Switch to Counter" : "Switch to List"}
      </button>
    </div>
  );
};
export default Log;
