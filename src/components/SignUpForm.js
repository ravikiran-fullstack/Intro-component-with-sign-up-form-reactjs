import React from "react";

const SignUpForm = () => {
  return (
    <div className="col-12 signUpForm">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
         
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
          
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
         
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary text-uppercase submitButton">
          claim your free trial
        </button>
      </form>
      <div className="termAndConditions">
          <p> By Clicking the button, you are agreeing to our <span className="alert">Terms and Services</span></p>
      </div>
    </div>
  );
};

export default SignUpForm;
