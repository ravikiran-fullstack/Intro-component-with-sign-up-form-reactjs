import React from 'react'
import SignUpForm from './SignUpForm';

const SignUpSection = () => {
    return (
        <div className="col-md-5 col-sm-12 signUpSection">
            <div className="row">
                <div className="col-12 freeTrial">
                    <p><span className="highlighted">Try it free 7 days</span> then $20/mo. thereafter</p>
                </div>
            </div>
            <div className="row">
                <SignUpForm></SignUpForm>
            </div>
        </div>
    )
}

export default SignUpSection