function FeedbackForm() {
  return (
    <form action="javascript:alert('Thanks!')">
      <div>
        <label>Name:</label>
        <input id="name" name="name" type="text" />
      </div>
      <div>
        <label>Feedback:</label>
        <input id="feedback" name="feedback" type="text" />
      </div>
      <div>
        <input id="submit" type="submit" />
      </div>
    </form>
  );
}

export default FeedbackForm;
