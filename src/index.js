import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sidebar from "./Sidebar/Sidebar";
import Side from "./Sidebar/Side";
import Header from "./Header";

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Side />
    <App />



  </React.StrictMode>,
  document.getElementById("root")
);
