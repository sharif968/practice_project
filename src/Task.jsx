/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Task({ tasks, onDelete }) {
  const [isEditing, setIsEditing] = useState(true);
  if (!tasks || tasks.length === 0) {
    return (
      <div className="m-20 text-xl bg-purple-200 p-4 rounded-lg">
        No tasks available. Please add a task.
      </div>
    );
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-center items-center mb-3">
          <input className="w-10 h-6" type="checkbox" checked={task.isDone} />
          if(isEditing)
          {
            <>
              <p> {task.title} </p>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-300 px-3 py-2 border border-violet-300  rounded-full"
              >
              
                Edit
              </button>
            </>
          }{" "}
          else{" "}
          {
            <>
              <input type="text" value={task.title} />
              <button
                onClick={() => setIsEditing(true)}
                className="bg-red-300 px-3 py-2 border border-violet-300  rounded-full"
              >
                {" "}
                Save{" "}
              </button>
            </>
          }
          <button
            className="bg-red-300 px-3 py-2 border border-violet-300  rounded-full"
            onClick={() => {
              onDelete(task.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
