// CreateOrganizationPage.js
import React, { useState } from 'react';
import './CreateOrganization.css';

function CreateOrganization() {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    members: [{ userId: '', role: 'Developer' }],
    projects: []
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const newMembers = [...formData.members];
    newMembers[index][name] = value;
    setFormData({
      ...formData,
      members: newMembers
    });
  };

  const addMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { userId: '', role: 'Developer' }]
    });
  };

  const removeMember = (index) => {
    const newMembers = [...formData.members];
    newMembers.splice(index, 1);
    setFormData({
      ...formData,
      members: newMembers
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Organization name is required';
    if (!formData.owner) errors.owner = 'Owner is required';
    formData.members.forEach((member, index) => {
      if (!member.userId) errors[`member${index}`] = 'Member userId is required';
    });
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form data submitted:', formData);
      // Submit form data to the server
    }
  };

  return (
    <div className="org-container">
    <div className="create-org-container">
      <h2>Create Organization</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Organization Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner (User ID):</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          />
          {errors.owner && <p className="error">{errors.owner}</p>}
        </div>
        <div className="form-group">
          <label>Members:</label>
          {formData.members.map((member, index) => (
            <div key={index} className="member-group">
              <input
                type="text"
                name="userId"
                placeholder="User ID"
                value={member.userId}
                onChange={(e) => handleMemberChange(index, e)}
              />
              <select
                name="role"
                value={member.role}
                onChange={(e) => handleMemberChange(index, e)}
              >
                <option value="Admin">Admin</option>
                <option value="Developer">Developer</option>
                <option value="Tester">Tester</option>
              </select>
              <button type="button" onClick={() => removeMember(index)}>
                Remove
              </button>
              {errors[`member${index}`] && <p className="error">{errors[`member${index}`]}</p>}
            </div>
          ))}
          <button type="button" onClick={addMember}>
            Add Member
          </button>
        </div>
        <button type="submit">Create Organization</button>
      </form>
    </div>
    </div>
  );
}

export default CreateOrganization;
