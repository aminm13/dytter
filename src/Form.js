import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import Success from './success';

import Store from './store';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)
    const submitForm = () => {
        setFormIsSubmitted(true);
    }

    return (
        <Store>
            {!formIsSubmitted ? <SignUpForm submitForm={submitForm} /> : <Success />}
        </Store>
    )
}

export default Form