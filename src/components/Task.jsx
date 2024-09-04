/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Task({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
        className="p-3 w-96 border border-black m-2 bg-green-100 mr-4 text-black rounded focus:outline-none focus:border-blue-500"
          value={task.title}
          onChange={(e) => {
            onEdit({
              ...task,
              title: e.target.value,
            });
          }}
        />
        <button className="bg-red-300 px-3 py-2 border border-violet-300 mr-2 rounded-full" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button className="bg-red-300 px-3 py-2 border border-violet-300 mx-2 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center mb-3">
      <input
      
        className="w-10 h-6"
        type="checkbox"
        checked={task.isDone}
        onChange={(e) => {
          onEdit({
            ...task,
            isDone: e.target.checked,
          });
        }}
      />
      {taskContent}
      {/* <input
        className="p-3 w-96 border border-black m-2 bg-green-100 mr-4 text-black rounded focus:outline-none focus:border-blue-500"
        type="text"
        value={task.title}
      />
      <button className="bg-red-300 px-3 py-2 border border-violet-300 mr-2 rounded-full">
        Save
      </button> */}
      <button
        className="bg-red-300 px-3 py-2 border border-violet-300  rounded-full"
        onClick={() => {
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
