import React, { useState, useEffect, useContext } from 'react';
import validation from './validation';
import { Context } from './store'
import './App.css';
import { Button, Input, Form, Label, FormGroup, Col } from 'reactstrap';
const SignUpForm = ({ submitForm, data }) => {


    const [state, setState] = useContext(Context)


    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(state));
        setDataIsCorrect(true);
    }



    const handleChange = (event) => {

        if (event.target.name !== "pic") {
            setState({
                ...state,
                [event.target.name]: event.target.value
            })

        } else {
            // setstate({
            //     ...state,
            //     [event.target.name]: event.target.files[0]
            // })
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true)
        }
    }, [errors])

    return (
        <div className="card">
            <Form>
                <fieldset>
                    <div id="legend primary">
                        <legend className="text-left text-white">Register</legend>
                    </div>
                    <div className="control-group">
                        <Label className="control-Label " for="firstName">First Name</Label >
                        <div className="controls">
                            {errors.fName && <p class="alert " role="alert">{errors.fName} </p>}
                            <Input type="text" id="firstName" name="fName" placeholder="First Name" value={state.fName} onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div>

                    <div className="control-group">
                        <Label className="control-Label " for="lastName">Last Name</Label >
                        <div className="controls">
                            {errors.lName && <p class="alert " role="alert">{errors.lName} </p>}
                            <Input type="text" id="lastName" name="lName" placeholder="Last Name" value={state.lName} onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div>
                    <div className="control-group">
                        <Label className="control-Label " for="email">E-mail</Label >
                        <div className="controls">
                            {errors.email && <p class="alert " role="alert">{errors.email} </p>}
                            <Input type="email" id="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div>

                    <div className="control-group">
                        <Label className="control-Label " for="password">Password</Label >
                        <div className="controls">
                            {errors.password && <p class="alert " role="alert">{errors.password} </p>}
                            <Input type="password" id="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div>

                    <div className="control-group">
                        <Label className="control-Label " for="phone">Phone Number</Label >
                        <div className="controls">
                            <Input type="tel" id="phone" name="phone" value={state.phone} placeholder="Phone Number" onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div>
                    <div className="control-group">
                        <Label className="control-Label " for="age">Age</Label >
                        <div className="controls">
                            {errors.lName && <p class="alert " role="alert">{errors.age} </p>}

                            <Input type="date" id="age" name="age" placeholder="" value={state.age} onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div>
                    {/* <div className="control-group">
                        <Label  className="control-Label " for="age">Profile Image</Label >
                        <div className="controls">
                            <input type="file" accept=".png .jgp .jpeg" id="pic" name="pic" placeholder="" onChange={handleChange} className="input-xlarge" />
                        </div>
                    </div> */}

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button color='primary' onClick={handleSubmit}>Register</Button>
                        </Col>
                    </FormGroup>
                </fieldset>
            </Form>
        </div>);
}

export default SignUpForm;