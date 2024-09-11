import { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [feedback, setFeedBack] = useState('');
  const [response, setResponse] = useState('empty');

  function sendFeedBack(event) {
    event.preventDefault();
    fetch('http://localhost:3001/hello')
      .then((response) => response.json())
      .then((json) => {
        console.log(json['message']);
        setResponse(json['message']);
      })
      .catch((error) => console.error(error));
  }

  return (
    <form>
      <div>
        <label>Name:</label>
        <input id="name" name="name" type="text" onChange={setName}></input>
      </div>
      <div>
        <label>Feedback:</label>
        <input
          id="feedback"
          name="feedback"
          type="text"
          onChange={setFeedBack}
        ></input>
      </div>
      <div>
        <input id="submit" type="submit" onClick={sendFeedBack}></input>
      </div>
      <div>
        <h3>
          {response === 'empty' ? 'No response from server yet' : response}
        </h3>
      </div>
    </form>
  );
}

export default FeedbackForm;
