import api from "../api/axios";
import { FaCheck, FaTrash, FaClock, FaCheckDouble } from "react-icons/fa";

const TaskList = ({ tasks, refresh }) => {
  const completeTask = async (id) => {
    try {
      await api.put(`/tasks/${id}/complete`);
      refresh();
    } catch (err) {
      console.error("Error completing task", err);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      refresh();
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  const pendingTasks = tasks.filter((t) => t.status === "pending");
  const completedTasks = tasks.filter((t) => t.status === "completed");

  return (
    <div className="space-y-8">
      {/* Pending Tasks Section */}
      <section>
        <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <FaClock className="text-cyan-400" />
          Pending
          <span className="text-sm font-normal text-gray-500 ml-auto">
            {pendingTasks.length} tasks
          </span>
        </h3>
        <div className="grid gap-4">
          {pendingTasks.map((task) => (
            <div
              key={task._id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg gap-4"
            >
              <span className="text-white text-lg font-medium tracking-wide break-words w-full sm:w-auto">
                {task.title}
              </span>
              <div className="flex gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => completeTask(task._id)}
                  title="Mark as Complete"
                  className="p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 transition-all duration-200 active:scale-90"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  title="Delete Task"
                  className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all duration-200 active:scale-90"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          {pendingTasks.length === 0 && (
            <div className="text-center py-10 bg-white/5 rounded-2xl border border-dashed border-white/10">
              <p className="text-gray-500 italic">
                No pending tasks. Time to relax? 🏖️
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Completed Tasks Section */}
      <section>
        <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <FaCheckDouble className="text-gray-500" />
          Completed
          <span className="text-sm font-normal text-gray-500 ml-auto">
            {completedTasks.length} tasks
          </span>
        </h3>
        <div className="grid gap-4 opacity-60">
          {completedTasks.map((task) => (
            <div
              key={task._id}
              className="flex items-center justify-between p-5 bg-black/20 border border-white/5 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <FaCheck className="text-green-500/50" />
                <span className="text-gray-400 text-lg line-through decoration-gray-600">
                  {task.title}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => deleteTask(task._id)}
                  className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all duration-200"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          {completedTasks.length === 0 && (
            <div className="text-center py-10 border border-dashed border-white/10 rounded-2xl">
              <p className="text-gray-500 italic">
                Completed tasks will appear here. Done is better than perfect!
                ✨
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TaskList;
