import React from "react";
import "./App.css";
import Recorder from "../Recorder";
import Calendar from "../Calender";

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  );
};

export default App;
