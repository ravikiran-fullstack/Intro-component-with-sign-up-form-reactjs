import React,{useState, useEffect} from "react";
import isEmail from 'validator/lib/isEmail';

const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameEmpty, setFirstNameEmpty] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameEmpty, setLastNameEmpty] = useState(false);
    const [email, setEmail] = useState("");
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    

    useEffect(() => {
      setEmailEmpty(false);
      if (!isEmail(email) && email) {
        setEmailEmpty(true);
      }
    }, [email]);

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

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!firstName) {
        setFirstNameEmpty(true);
      }
      if (!lastName) {
        setLastNameEmpty(true);
      }
      if (!email) {
        setEmailEmpty(true);
      }
      if (!password) {
        setPasswordEmpty(true);
      }
    };

    return (
      <div className="col-12 signUpForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={`form-control  ${firstNameEmpty && "alertInput"}`}
              placeholder="First Name"
              value={firstName}
              onChange={updateFirstName}
              autoComplete="off"
            />
            {firstNameEmpty && <small className="form-text text-muted text-right textRed">First Name cannot be empty</small>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className={`form-control  ${lastNameEmpty && "alertInput"}`}
              placeholder="Last Name"
              value={lastName}
              onChange={updateLastName}
              autoComplete="off"
            />
            {lastNameEmpty && <small className="form-text text-muted text-right textRed">Last Name cannot be empty</small>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className={`form-control  ${emailEmpty && "alertInput"}`}
              placeholder="Email Address"
              value={email}
              onChange={updateEmail}
              autoComplete="off"
            />
            {emailEmpty && <small className="form-text text-muted text-right textRed">Email cannot be empty and in proper format</small>}
          </div>
          <div className="form-group">
            <input
              type="password"
              className={`form-control  ${passwordEmpty && "alertInput"}`}
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              autoComplete="off"
            />
            {passwordEmpty && <small className="form-text text-muted text-right textRed">Password cannot be empty</small>}
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
