import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!value) setErrors({ ...errors, [name]: 'This field is required.' });
    else if (name === 'email' && !validateEmail(value)) setErrors({ ...errors, email: 'Invalid email address.' });
    else setErrors({ ...errors, [name]: '' });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <span>{errors.name}</span>
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <span>{errors.email}</span>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
        <span>{errors.message}</span>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
