import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToD0Form'


function App() {
  return (
    <div className="App">
 <Header tagline='this could be your bucket'/>
 {/* <Header tagline='this could be your bucket list'/> */}
 <ToDoForm/>
 <ToDoList/>
 
    </div>
  );
}

export default App;
