import React from "react";
import "./style.css";
import Card from './Components/Card.jsx';


export default function App() {
  return (
<div id="con">
    <Card title="🕌 Salah
    "  dueDate= "5 time a day " />
    <Card title="📖 Qur’an " dueDate= "Every day"/>
    <Card title="🤲 Dhikr
    "  dueDate= " after salah"/>
    <Card title="🌅 Adhkar" dueDate= "Morning & Evening "/>
    <Card title="💝 Sadaqah" dueDate= "once a week " />
    <Card title="🌙 Fasting" dueDate= "weekly(Mon & Thu)" />

       </div>   
  );
}
