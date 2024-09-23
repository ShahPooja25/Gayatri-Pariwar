import React, { useState } from 'react';
import './Form.css'; // Ensure the CSS file is imported

function Form() {
  // State for all input fields
  const [formData, setFormData] = useState({
    title: '',
    sellerName: '',
    address: '',
    date: '',
    startTime: '',
    endTime: ''
  });

  // Handler for text, date, and time changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value // Update the corresponding state field
    });
    console.log(name, value); // Log the name and value of the field
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="form-container">
      <h1 className='heading'>Title of the Campaign</h1>
      <input 
        className="form-control" 
        onChange={onChangeHandler} 
        name="title" 
        value={formData.title} 
        placeholder="Enter Campaign Title"
      />
      <br />
      
      <h1 className='heading'>Book Seller's Name:</h1>
      <input 
        className="form-control" 
        onChange={onChangeHandler} 
        name="sellerName" 
        value={formData.sellerName} 
        placeholder="Enter Seller's Name"
      />
      <br />

      <h1 className='heading'>Address Of the Campaign:</h1>
      <input 
        className="form-control" 
        onChange={onChangeHandler} 
        name="address" 
        value={formData.address} 
        placeholder="Enter Campaign Address"
      />
      <br />

      <h1 className='heading'>Campaign Date:</h1>
      <input 
        className="form-control" 
        type="date" 
        onChange={onChangeHandler} 
        name="date" 
        value={formData.date}
      />
      <br />

      <h1 className='heading'>Start Time:</h1>
      <input 
        className="form-control" 
        type="time" 
        onChange={onChangeHandler} 
        name="startTime" 
        value={formData.startTime}
      />
      <br />

      <h1 className='heading'>End Time:</h1>
      <input 
        className="form-control" 
        type="time" 
        onChange={onChangeHandler} 
        name="endTime" 
        value={formData.endTime}
      />
      <br />

      {/* Submit button */}
      <button className="submit-btn" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
}

export default Form;
