import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './About.css';

const About = () => {
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
    alert(
      `Form submitted: ${firstName} ${lastName}, ${email}, ${ticketType}, ${total} CAD`
    );
  };

  const logoStyle = {
    height: '50px',
    marginRight: 'auto',
  };

  const navLinksStyle = {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  };

  const navLinkItemStyle = {
    display: 'inline',
  };

  const navLinkStyle = {
    color: '#333',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const navLinkHoverStyle = {
    backgroundColor: '#f4f4f4',
    color: '#007BFF',
    borderRadius: '5px',
  };

  const aboutTitleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '2.5rem',
    color: 'Indigo',
    textAlign: 'center',
    margin: '2rem 0 1rem',
  };

  const aboutDescriptionStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.125rem',
    textAlign: 'center',
    margin: '0 0 2rem',
    color: '#F8931D',
    padding: '0 1rem',
  };

  const callToActionStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
  };

  const callToActionBtnStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const callToActionBtnHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const formStyle = {
    backgroundColor: '#7B61FF', // Purple background
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '2rem auto',
    fontFamily: 'Poppins, sans-serif',
  };

  const formTitleStyle = {
    color: 'purple',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const formDescriptionStyle = {
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

  const radioStyle = {
    margin: '0.5rem 0',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const ProductCard = ({ image, title, description }) => {
    const cardStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      fontFamily: 'Poppins, sans-serif',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      backgroundColor: '#fff',
      margin: '1rem',
    };

    const imageStyle = {
      width: '100%',
      borderRadius: '10px',
      objectFit: 'cover',
    };

    const titleStyle = {
      fontSize: '1.25rem',
      margin: '0.5rem 0',
      fontWeight: 'bold',
      color: 'Indigo',
    };

    const descriptionStyle = {
      fontSize: '1rem',
      color: 'Orange',
      textAlign: 'center',
    };

    return (
      <div style={cardStyle}>
        <img src={image} alt={title} style={imageStyle} />
        <h2 style={titleStyle}>{title}</h2>
        <p style={descriptionStyle}>{description}</p>
      </div>
    );
  };

  const donationDescriptionStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.125rem',
    textAlign: 'center',
    margin: '1rem 0',
    color: 'orange',
    padding: '0 1rem',
  };

  return (
    <div className="background">
      <img
        src="src/app/Assets/2023MacBookProM3/websiteLogo.png"
        alt="Logo"
        style={logoStyle}
      />
      <ul style={navLinksStyle}>
        <li style={navLinkItemStyle}>
          <a href="/" style={navLinkStyle}>
            Home
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="/coffee-house" style={navLinkStyle}>
            Coffee House
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="/join-our-team" style={navLinkStyle}>
            Join our Team
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="/values" style={navLinkStyle}>
            Values
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="/initiatives" style={navLinkStyle}>
            Initiatives
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="/our-team" style={navLinkStyle}>
            Our Team
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="/donate" style={navLinkStyle}>
            Donate
          </a>
        </li>
      </ul>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 style={aboutTitleStyle}>Helping Hands for Human Trafficking</h1>
            <p style={aboutDescriptionStyle}>
              Join us in our mission to combat human trafficking. Your
              contributions will help provide support to victims and raise
              awareness about this critical issue. Together, we can make a
              difference.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ProductCard
              image="src/app/Assets/2023MacBookProM3/Donation.jpg"
              title="Make a Donation"
              description="Your donation can help save lives. Contribute today to make a difference."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <form onSubmit={handleSubmit} style={formStyle}>
              <h2 style={formTitleStyle}>2024 Human Trafficking Donations</h2>
              <p style={formDescriptionStyle}>
                Support our mission by donating
              </p>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={inputStyle}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={inputStyle}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
              />
              <div style={radioStyle}>
                <label>
                  <input
                    type="radio"
                    value="adult"
                    checked={ticketType === 'adult'}
                    onChange={handleTicketChange}
                    required
                  />
                  Adult - $8 CAD
                </label>
              </div>
              <div style={radioStyle}>
                <label>
                  <input
                    type="radio"
                    value="teen"
                    checked={ticketType === 'teen'}
                    onChange={handleTicketChange}
                    required
                  />
                  Teen - $4 CAD
                </label>
              </div>
              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </form>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <h2 style={aboutTitleStyle}>
              What will we do with these donations?
            </h2>
            <p style={donationDescriptionStyle}>
              Donations will be utilized to provide resources, support, and
              rehabilitation for victims of human trafficking. They will also
              fund educational programs and initiatives to raise awareness and
              prevent future occurrences.
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-4 d-flex flex-column justify-content-center">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="src/app/Assets/2023MacBookProM3/picture.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="src/app/Assets/2023MacBookProM3/image.png"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="src/app/Assets/2023MacBookProM3/picture.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <h1 style={aboutTitleStyle}>Member Activities</h1>
            <p style={aboutDescriptionStyle}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
