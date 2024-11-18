import React, { useState, useEffect } from 'react';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import './styles/Todo.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (taskData) => {
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? { ...task, ...taskData } : task
    ));
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">
            {editingTask ? 'Edit Task' : 'Add New Task'}
          </h2>
        </div>
        <div className="p-4">
          <TaskForm
            onSubmit={editingTask ? handleEditTask : handleAddTask}
            initialData={editingTask}
            onCancel={editingTask ? () => setEditingTask(null) : null}
          />
        </div>
      </div>

      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;