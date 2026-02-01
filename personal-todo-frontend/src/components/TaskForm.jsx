import { useState } from "react";
import api from "../api/axios";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const TaskForm = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim() || isAdding) return;
    setIsAdding(true);
    try {
      await api.post("/tasks", { title });
      setTitle("");
      toast.success("Task added successfully!");
      refresh();
    } catch (err) {
      toast.error("Failed to add task");
      console.error("Error adding task", err);
    } finally {
      setIsAdding(false);
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
        disabled={isAdding}
        className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold shadow-lg transition-all duration-200 active:transform active:scale-95 flex items-center justify-center gap-2
                   ${
                     isAdding
                       ? "bg-gray-600 cursor-not-allowed text-gray-400 shadow-none"
                       : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/30"
                   }`}
      >
        {isAdding ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <FaPlus />
        )}
        <span>{isAdding ? "Adding..." : "Add Task"}</span>
      </button>
    </form>
  );
};

export default TaskForm;
