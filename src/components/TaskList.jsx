import Task from "./Task";

/* eslint-disable react/prop-types */
export default function TaskList({ tasks, onDelete, onEdit }) {
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
<Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
