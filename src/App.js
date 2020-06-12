import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import Count from "./count";
import ToDo from "./ToDo";
import Log from "./login";
import Footer from "./footer";

export default function App() {
  const logdata = useSelector(state => state.log);

  return (
    <div className="App">
      <Log />
      <br />
      <br />
      {logdata === false ? <ToDo /> : <Count />}
      <Footer />
    </div>
  );
}
