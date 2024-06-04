import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { useState } from 'react';

function About() {
  const [message, setMessage] = useState('No response recieved yet');
  const [respose, setResponse] = useState('No response recieved yet');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function getMessage() {
    fetch('http://localhost:3001/hello')
      .then((response) => response.json())
      .then((json) => setMessage(json.Message))
      .catch((error) => console.error(error));
  }

  function sendData(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    };
    fetch('http://localhost:3001/formSubmit', requestOptions)
      .then((response) => response.json())
      .then((json) => setResponse(json.Message))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <NavBar />
      <div>Press the button to get a greeting from the backend server:</div>
      <a className="btn btn-primary" onClick={getMessage}>
        Get Request
      </a>
      <div>{message}</div>
      <div>
        Use the form below to send some form data to the back end server
      </div>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={sendData}>
          Send Data
        </button>
      </form>
      <div>{respose}</div>
      <Footer />
    </div>
  );
}

export default About;
