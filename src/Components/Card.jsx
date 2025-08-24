import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
function  Card(props){
  return (
    <div className="card">
    <p> {props.title} </p>
   <p> {props.dueDate} </p>

</div>
  )
}
export default Card 