import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './login.css';

const SignUp = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
      isValid = false;
    } else if (formData.firstName.length < 4) {
      errors.firstName = 'firstName must be at least 4 characters';
      isValid = false;
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
      isValid = false;
    } else if (formData.lastName.length < 5) {
      errors.lastName = 'lastName must be at least 5 characters';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    if(formData.firstName&&formData.lastName&&formData.email&&formData.password !==''){
      Navigate('/products')
  }




    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

      console.log(formData);
    } else {
      console.log('Form validation failed');
    }
  };


  return (
    <div className="sign-up-container">
      <h2>Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
