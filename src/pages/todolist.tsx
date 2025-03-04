import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list flex flex-col items-center p-10">
      <div className="lg:min-h-[600px] min-h-[500px] bg-[#2A3335] lg:w-[460px] w-full rounded-3xl p-3 drop-shadow-xl">
        <h1 className="text-center lg:text-3xl md:text-3xl text-2xl p-3 text-[#F1F0E9] bg-[#1F509A] rounded-2xl drop-shadow-md">
          To Do List
        </h1>

        <div className="inline-block pr-4 pt-4">
          <input
            className="border-solid border-2 border-[#A1E3F9] lg:w-[330px] md:w-[560px] w-[180px] bg-[#F1F0E9]"
            type="text"
            placeholder="Enter a task ..."
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>

        <div className="inline-block">
          <button
            className="bg-[#1F509A] hover:bg-[#0A3981] p-1 rounded-xl md:text-lg text-base text-[#F1F0E9]"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul
          className={`pt-5 ${
            tasks.length > 0
              ? "overflow-y-scroll max-h-[600px]"
              : "overflow-y-hidden"
          }`}
        >
          {tasks.map((task, index) => (
            <li
              className="border-b-2 border-[#EAEAEA] w-full p-2 flex justify-between items-center  md:text-lg text-base text-[#F1F0E9]"
              key={index}
            >
              {task}
              <div>
                <button
                  className="hover:bg-gray-500 p-1"
                  onClick={() => moveTaskUp(index)}
                >
                  ⬆
                </button>
                <button
                  className="hover:bg-gray-500 p-1"
                  onClick={() => moveTaskDown(index)}
                >
                  ⬇
                </button>
                <button
                  className="hover:bg-red-500 p-1"
                  onClick={() => deleteTask(index)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
