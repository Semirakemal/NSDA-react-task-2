import React,{useState} from "react";
  import { createRoot } from 'react-dom/client';

function Task(){
  const [task , setTask]=useState([]);
  const [newTask, setNewTask]=useState("");

  const addTask=()=>{
    if(newTask.trim === "")return;
    setTask([... task,{ text:newTask,
      completed:false}]);
    setNewTask("");

  };
  const completeTask  = (index)=>{
    const updatedTask  = task.map((task,i)=> i=== index?{...task, completed:true}:
    task 
    );
    setTask(updatedTask);

  };

  return (
    <div>
  <input 
  type="text"
  value={newTask}
  onChange={(e)=>setNewTask(e.target.value)}
  placeholder="Enter the task"/>
  <button onClick={addTask}>Add</button>
  <ul>
    {task.map((task,index)=>(
      <lo  key={index}>
        <span style={{color:task.completed ? "darkslategrey" :"red"}}>
          {task.text}
          </span>
          {!task.completed &&(
            <button onClick={()=>completeTask(index)}>complete</button>

          ) }
          </lo>
    ))}
    </ul>
  
    {task.length > 0 && task.every(task => task.completed) && (
        <p className="motivation">👌Keep up the good work! 💐💐</p>
        )}
</div>

  );
}

export default Task 
