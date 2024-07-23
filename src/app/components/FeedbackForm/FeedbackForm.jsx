import { useState } from 'react';

function FeedbackForm() {
  const [data, setData] = useState('nothing recieved from the server yet');

  function handleDB(event) {
    event.preventDefault();
    fetch('http://localhost:3001/testDB')
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <form>
      <div>
        <label>Name:</label>
        <input id="name" name="name" type="text"></input>
      </div>
      <div>
        <label>Feedback:</label>
        <input id="feedback" name="feedback" type="text"></input>
      </div>
      <div>{data}</div>
      <div>
        <button
          className="btn btn-outline-success"
          id="submit"
          onClick={handleDB}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
