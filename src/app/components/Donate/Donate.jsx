// HumanTraffickingForm.jsx
import React, { useState } from 'react';

const HumanTraffickingForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [total, setTotal] = useState(0);

  const handleTicketChange = (event) => {
    const ticket = event.target.value;
    setTicketType(ticket);
    if (ticket === 'adult') {
      setTotal(8);
    } else if (ticket === 'teen') {
      setTotal(4);
    } else {
      setTotal(0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert(
      `Form submitted: ${firstName} ${lastName}, ${email}, ${ticketType}, ${total} CAD`
    );
  };

  const formStyle = {
    backgroundColor: '#7B61FF', // Purple background
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '2rem auto',
    fontFamily: 'Poppins, sans-serif',
  };

  const titleStyle = {
    color: 'purple',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    color: 'orange',
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const radioLabelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
  };

  const radioInputStyle = {
    marginRight: '0.5rem',
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#cc7a00',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={titleStyle}>2024 Human Trafficking Initiative</div>
      <div style={descriptionStyle}>
        Join us in our mission to combat human trafficking. Your contributions
        will help provide support to victims and raise awareness about this
        critical issue.
      </div>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={inputStyle}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={inputStyle}
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
      </label>
      <label style={radioLabelStyle}>
        <input
          type="radio"
          value="adult"
          checked={ticketType === 'adult'}
          onChange={handleTicketChange}
          style={radioInputStyle}
        />
        Adult (+8 CAD)
      </label>
      <label style={radioLabelStyle}>
        <input
          type="radio"
          value="teen"
          checked={ticketType === 'teen'}
          onChange={handleTicketChange}
          style={radioInputStyle}
        />
        Teen (+4 CAD)
      </label>
      <button
        type="submit"
        style={submitButtonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor =
            submitButtonHoverStyle.backgroundColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = submitButtonStyle.backgroundColor;
        }}
      >
        Submit {total} CAD
      </button>
    </form>
  );
};

export default HumanTraffickingForm;
