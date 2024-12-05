import React, { useState } from 'react';
import './dataDelete.css'; // Import the CSS file
import './submit.css'; // Import the CSS file
import emailjs from 'emailjs-com'; // Install EmailJS: npm install emailjs-com

const NodexPosAccountDelete = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
    };

    // Replace with your EmailJS service ID, template ID, and user ID
    emailjs
      .send(
        'service_0gnn8in', // Replace with your EmailJS service ID
        'template_776mhtt', // Replace with your EmailJS template ID
        templateParams,
        'ZSSlGEUXcFTWFbQaY' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('Your request has been submitted successfully!');
          setFormData({ email: '', phone: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setErrorMessage('Something went wrong. Please try again later.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="account-delete-container">
      <h1>Nodex POS Data Deletion Request</h1>
      <p>
        Please fill out the form below to request the deletion of your data. We
        will process your request within 7 business days.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Additional Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>

      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default NodexPosAccountDelete;
