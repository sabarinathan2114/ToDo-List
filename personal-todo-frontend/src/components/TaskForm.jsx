import { useState } from "react";
import api from "../api/axios";
import { FaPlus } from "react-icons/fa";

const TaskForm = ({ refresh }) => {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await api.post("/tasks", { title });
      setTitle("");
      refresh();
    } catch (err) {
      console.error("Error adding task", err);
    }
  };

  return (
    <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-4">
      <input
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/30 transition-all duration-200 active:transform active:scale-95 flex items-center justify-center gap-2"
      >
        <FaPlus />
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default TaskForm;
