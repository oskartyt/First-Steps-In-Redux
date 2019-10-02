import React from 'react';
import './App.scss';
import {useSelector} from "react-redux";

function App() {
  const counter = useSelector(state=>state.counter);
  return (
    <div>
      Counter {counter}
    </div>
  );
}

export default App;
