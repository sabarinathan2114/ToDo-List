import { useEffect, useState } from "react";
import api from "../api/axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-center sm:text-left">
            My <span className="text-cyan-400">Tasks</span>
          </h2>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 transition-all duration-200 font-medium"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Add Task Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">
            <TaskForm refresh={fetchTasks} />
          </div>

          {/* Task List Section */}
          <div className="space-y-6">
            <TaskList tasks={tasks} refresh={fetchTasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
