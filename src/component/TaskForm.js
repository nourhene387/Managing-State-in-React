import React, { useState } from 'react';
import '../styles/Todo.css';

const TaskForm = ({ onSubmit, initialData = null, onCancel = null }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError('Both name and description are required');
      return;
    }
    onSubmit({ name, description });
    if (!initialData) {
      setName('');
      setDescription('');
    }
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="fade-in">
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-textarea"
      />
      {error && <div className="error-message">{error}</div>}
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          {initialData ? 'Update Task' : 'Add Task'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn btn-outline">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;