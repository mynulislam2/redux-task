import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Card, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { StorePerson } from '../../redux/Features/LoggedInPerson/LoggedInPerson';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Registration.css';
const Registration = () => {
    const [errors, setErrors] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const[user,loading,error]=useAuthState(auth)


    const HandleRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const checked = event.target.check.checked
        if (checked) {
            signInWithEmailAndPassword(auth, email, password);
            setErrors("")
            dispatch(StorePerson({ email, password }))
        }
        else if (!checked) {
            setErrors("Please checkout our terms and condition")
        }
    }

    if (user) {
        navigate('/DashBoard')
        signOut(auth);
    }
    return (
        <Container>
            <Row xs={1} sm={1} md={2} lg={3} >
                <Card className={`mx-auto border-0 shadow rounded-3 my-1 registration`}>
                    <Card.Body className="p-4 p-sm-5">
                        <Card.Title className=" text-center mb-5 fw-light fs-5">Login</Card.Title>
                        <form onSubmit={HandleRegister}>
                            <div className="form-floating mb-3">
                                <Form.Control type="email" placeholder="name@example.com"
                                    name="email"
                                    required />
                                <label >Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Form.Control type="password" placeholder="Password" name="password" required />
                                <label >Password</label>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="terms and condition" name='check' />
                            </Form.Group>
                            {error || errors && <small className='text-danger'>{error || errors}</small>}
                            <div className="d-grid mb-2">
                                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
                            </div>
                            <hr />
                            <SocialMedia></SocialMedia>
                        </form>
                    </Card.Body>
                </Card>

            </Row>

        </Container>
    );
};

export default Registration;