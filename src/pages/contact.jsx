export const Contact = () => {
  return (
    <div className="container" style={{ padding: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
              />
            </div>
            <div className="form-group form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1" 
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
