import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShowDetail } from '../../redux/Features/LoggedInPerson/LoggedInPerson';
import DashBoard from '../DashBoard/DashBoard';

const Details = () => {
    const { email, pass, isShowDetails } = useSelector((state) => state.person)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const Close = () => {
        dispatch(ShowDetail({isShowDetails:()=>false}))
    }
    const isShow=isShowDetails()

    return (
        <div>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3} style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                    {isShow?<motion.Card
                        initial={{ x: window.innerWidth, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
                        exit="hidden"
                        className={`mx-auto border-0 shadow rounded-3 my-1 registration`}>
                        <Card.Body className="p-4 p-sm-5">
                            <Card.Title className=" text-center mb-5 fw-light fs-5">Details</Card.Title>
                            <p>
                                Email:{email}
                            </p>
                            <p>
                                PassWord:{pass}
                            </p>
                            <Button onClick={() => Close()}>Close</Button>
                        </Card.Body>
                    </motion.Card>:navigate('/DashBoard')}

                </Row>

            </Container>
        </div>
    );
};

export default Details;