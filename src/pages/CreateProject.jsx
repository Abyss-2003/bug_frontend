import React, { useState } from 'react';
// import axios from 'axios';
import './CreateProject.css';

const CreateProject = () => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    organization: '',
    createdBy: '',
    members: '',
    bugs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post('/api/projects', project);
    //   alert('Project created successfully');
    // } catch (error) {
    //   console.error('Error creating project:', error);
    // }
  };

  return (
    <div className="create-project">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Organization ID:
          <input
            type="text"
            name="organization"
            value={project.organization}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Created By (User ID):
          <input
            type="text"
            name="createdBy"
            value={project.createdBy}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Members (comma-separated User IDs):
          <input
            type="text"
            name="members"
            value={project.members}
            onChange={handleChange}
          />
        </label>
        <label>
          Bugs (comma-separated Bug IDs):
          <input
            type="text"
            name="bugs"
            value={project.bugs}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
