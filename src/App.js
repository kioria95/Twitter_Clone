import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Bottom from "./Bottom";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />

      <Bottom />
    </div>
  );
}

export default App;
