import React, { useState } from 'react';
import '../styles/Todo.css';
const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={`p-4 mb-4 border rounded-lg ${task.completed ? 'bg-gray-50' : ''}`}>
      <div className="flex items-start justify-between">
        <div className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          <h3 className="font-semibold">{task.name}</h3>
          <p className="text-sm mt-1">{task.description}</p>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onToggleComplete(task.id)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            {task.completed ? '✓' : '○'}
          </button>
          <button
            onClick={() => onEdit(task)}
            disabled={task.completed}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded-md"
          >
            ✎
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            className="p-2 text-red-600 hover:bg-red-100 rounded-md"
          >
            ×
          </button>
        </div>
      </div>
      {showConfirm && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          <p className="text-sm mb-2">Are you sure you want to delete this task?</p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onDelete(task.id);
                setShowConfirm(false);
              }}
              className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="px-3 py-1 text-gray-700 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
