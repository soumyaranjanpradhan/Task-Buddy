import './App.css';
import Taskform from './Componenets/Taskform';
import TaskList from './Componenets/TaskList';
import Progresstracker from './Componenets/Progresstracker';
import { useEffect, useState } from 'react';
function App() {

  const [tasks, setTasks] = useState([]);


  // use effect

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  // addtask
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  // update Task
  const updateTask = (updateTask, index) => {
    const newtask = ([...tasks]);
    newtask[index] = updateTask;
    setTasks(newtask);
  }

  // delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  // clearTask
  const clearTask = () => {
    setTasks([]);
  }

  return (
    <>
      <div className="main" >
        <div className="header">
          <h1 id='top-name'>Task Buddy</h1>
          <p id='top-description'>Hii friend I am your Task Manager</p>
        </div>
      </div>
      <Taskform addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} />
      {tasks.length > 0 && (<button onClick={clearTask}>Clear all task</button>)}
    </>
  )
}

export default App
