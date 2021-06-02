import React,{useState} from "react";

const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameEmpty, setFirstNameEmpty] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameEmpty, setLastNameEmpty] = useState(false);
    const [email, setEmail] = useState("");
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    
    const updateFirstName = e => {
        setFirstName(e.target.value)
        setFirstNameEmpty(false);
    }

    const updateLastName = e => {
        setLastName(e.target.value)
        setLastNameEmpty(false);
    }

    const updateEmail = e => {
        setEmail(e.target.value)
        setEmailEmpty(false);
    }

    const updatePassword = e => {
        setPassword(e.target.value)
        setPasswordEmpty(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!firstName){
            setFirstNameEmpty(true);
        }
        if(!lastName){
            setLastNameEmpty(true);
        }
        if(!email){
            setEmailEmpty(true);
        }
        if(!password){
            setPasswordEmpty(true);
        }
    }
    return (
      <div className="col-12 signUpForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={updateFirstName}
            />
            {firstNameEmpty && <small class="form-text text-muted">First Name cannot be empty</small>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={updateLastName}
            />
            {lastNameEmpty && <small class="form-text text-muted">First Name cannot be empty</small>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={updateEmail}
            />
            {emailEmpty && <small class="form-text text-muted">First Name cannot be empty</small>}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            {passwordEmpty && <small class="form-text text-muted">First Name cannot be empty</small>}
          </div>
          <button
            type="submit"
            className="btn btn-primary text-uppercase submitButton"
            disabled={firstNameEmpty || lastNameEmpty || emailEmpty || passwordEmpty}
          >
            claim your free trial
          </button>
        </form>
        <div className="termAndConditions">
          <p>
            {" "}
            By Clicking the button, you are agreeing to our{" "}
            <span className="alert">Terms and Services</span>
          </p>
        </div>
      </div>
    );
};

export default SignUpForm;
