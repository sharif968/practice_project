import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { tasks } from "./data/data";
import { useState } from "react";

export default function App() {
  const initialTasks = tasks;
  const [taskList, setTaskList] = useState(initialTasks);

  const handleAddTask = (newTask) => {
    const newTaskList = [newTask , ...taskList];
    setTaskList(newTaskList);
  };

  const handleEditTask =(editTask)=>{
    const editTaskList = taskList.map(task => {
      if(task.id === editTask.id){
        return editTask;
      } else {
        return task;
      }
    });
    setTaskList(editTaskList);
  }

  const handleDeleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="m-8 p-4 flex flex-col -800 justify-center items-center">
        {" "}
        <h1 className="font-semibold text-violet-500 text-3xl pb-6">
          A new journey to use useState
        </h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={taskList} onDelete={handleDeleteTask} onEdit={handleEditTask} />
      </div>
    </>
  );
}
