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
      <div className="min-h-[600px] bg-[#2A3335] w-[460px] rounded-3xl p-3 drop-shadow-xl">
        <h1 className="text-center text-3xl p-3 text-[#F1F0E9] bg-[#1F509A] rounded-2xl drop-shadow-md">
          To Do List
        </h1>

        <div className="inline-block pr-4 pt-4">
          <input
            className="border-solid border-2 border-[#A1E3F9] w-[349px] bg-[#F1F0E9]"
            type="text"
            placeholder="Enter a task ..."
            value={newTask}
            onChange={handleInputChange}
          />
        </div>

        <div className="inline-block">
          <button
            className="bg-[#1F509A] hover:bg-[#0A3981] p-1 rounded-xl text-[#F1F0E9]"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul className="overflow-y-scroll overflow-y-hidden max-h-[600px] pt-5">
          {tasks.map((task, index) => (
            <li
              className="border-b-2 border-[#EAEAEA] w-full p-2 flex justify-between items-center text-[#F1F0E9]"
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
                  className="hover:bg-gray-500 p-1"
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
