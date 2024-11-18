import React from 'react';
import TaskItem from './TaskItem';
import '../styles/Todo.css';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  if (tasks.length === 0) {
    return <div className="empty-state">No tasks yet. Add one above!</div>;
  }

  return (
    <div className="fade-in">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;

