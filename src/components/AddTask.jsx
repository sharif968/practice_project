/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({ onAddTask }) { 
  const [title, setTitle] = useState("");
  const capitalizeFirstLetter = (str) => {
    if (!str) ; // Return an empty string if input is falsy
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() ) {
      const newTask = {
        id: Date.now(),
        title,
        isDone: false,
      };
      onAddTask(newTask);
      setTitle(" ");
    }  else {
        return alert("Please add a task")
    }
  };
  return (
    <div>
      <input
className="p-3 w-96 border border-black m-2 bg-green-100 mr-4 text-black rounded focus:outline-none focus:border-blue-500"        type="text"
        placeholder="Type your task here..."
        value={capitalizeFirstLetter(title)}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="bg-blue-300 px-3 border border-gray-600 py-2 rounded-lg "
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
}
