import { useState } from "react";
import ListRendered from "@/components/listRenderer";
import { v4 } from "uuid";

export default function ToDo() {
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const getItem = () => {
    return {
      taskId: v4(),
      taskDescription: taskInput,
      isChecked: false,
      isDone: false
    }
  }

  const onClickAdd = () => {
    if(!taskInput)
      return
    setTaskList([...taskList, getItem()]);
    setTaskInput('');
  };

  const onChecked = (id) => {
    const updatedTaskList = taskList.map(task => {
      if (task.taskId === id) {
        return {...task, isChecked: !task.isChecked};
      }
      return task;
    });
    setTaskList(updatedTaskList)
  }

  const markAsDone = function() {
    const markedList = taskList.map(task => {
      if(task.isChecked) {
        task.isDone = true
      }
      return task
    })
    setTaskList(markedList)
  }

  const removeCompletedTasks = () => {
    const updatedTaskList = taskList.filter(task => !task.isChecked);
    setTaskList(updatedTaskList);
  };
  
  return (
    <div className="min-h-screen h-full w-auto bg-slate-50 flex justify-center items-center">
      <div className="relative mt-2 w-full sm:w-1/2 md:w-1/3 min-h-screen h-full bg-white">
        <div className="flex justify-center gap-4">
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            type="text"
            name="taskInput"
            id="taskInput"
            className="w-96 my-4 bg-slate-100 ring-0 focus:ring-0 py-2 px-4 rounded-md text-gray-900 sm:text-sm sm:leading-6"
            placeholder="Write a new task"
          />
          <button
            onClick={onClickAdd}
            className="text-black text-sm px-4 border border-gray-400 my-4 rounded-md hover:bg-slate-200"
          >
            Add Task
          </button>
        </div>
        <h1 className=" text-gray-700 w-full text-3xl flex justify-center py-4">Your To Do Tasks.</h1>
        <ListRendered list={ taskList } onChecked={onChecked} />
        <div className="mt-8 space-x-4 flex justify-center">
          <button onClick={markAsDone} className="text-black text-sm px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-200 border border-gray-400 rounded-md">Mark Done</button>
          <button onClick={removeCompletedTasks} className="text-black text-sm px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-red-200 border border-gray-400 rounded-md">Remove</button>
        </div>
      </div>
    </div>
  );
}
