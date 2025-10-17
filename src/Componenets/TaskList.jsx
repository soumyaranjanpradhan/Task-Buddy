import React from "react"
import "../CSS/TaskList.css"
export default function TaskList({ tasks, updateTask, deleteTask }) {
      const toggleComplete = (index) => {
            const updatedTask = { ...tasks[index], commplete: !tasks[index].commplete };
            updateTask(updatedTask, index);
      }
      return (
            <ul>
                  {tasks.map((task, index) => (
                        <li key={index}>
                              <div>
                                    <span> {task.text}
                                          <small>
                                                ({task.priority}, {task.catagory})
                                          </small>
                                    </span>
                              </div>
                              <div>
                                    <button onClick={() => toggleComplete(index)}>
                                          {task.commplete ? "Undo" : "Complete"}
                                    </button>
                                    <button onClick={() => deleteTask(index)}>
                                          Delete
                                    </button>
                              </div>
                        </li>
                  ))}
            </ul>
      )
}
