import { useState } from "react";
import "../CSS/Taskform.css";

function Taskform({ addTask }) {
      const [task, setTask] = useState('');
      const [priority, setPriority] = useState('medium');
      const [catagory, setCatagory] = useState('general');
      // handle submit
      const handlesubmit = (e) => {
            e.preventDefault();
            addTask({ text: task, priority, catagory, complete: false });


            setTask('');
            setPriority('medium');
            setCatagory('general');
      }
      return (
            <form onSubmit={handlesubmit}>
                  <div>
                        <input value={task} type="text" placeholder="Enter the Task" className="to-do-input"
                              onChange={(e) => setTask(e.target.value)} />
                        <button type="submit">Add Task</button>
                        {/* <h1>
                              {task} {priority} {catagory}
                        </h1> */}
                  </div>
                  <div>
                        <select value={priority} className="" id="" onChange={(e) => setPriority(e.target.value)}>
                              <option value="high">High</option>
                              <option value="medium">Medium</option>
                              <option value="low">Low</option>
                        </select>
                        <select value={catagory} className="" id="" onChange={(e) => setCatagory(e.target.value)}>
                              <option value="general">General</option>
                              <option value="work">Work</option>
                              <option value="personal">Presonal</option>
                        </select>
                  </div>
            </form>
      )
}
export default Taskform;