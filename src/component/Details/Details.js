import { motion } from 'framer-motion';
import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Details = () => {
    const { email, pass } = useSelector((state) => state.person)

    return (
        <div>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3} style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                    <motion.Card
                        initial={{ x: window.innerWidth, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
                        className={`mx-auto border-0 shadow rounded-3 my-1 registration`}>
                        <Card.Body className="p-4 p-sm-5">
                            <Card.Title className=" text-center mb-5 fw-light fs-5">Details</Card.Title>
                        <p>
                            Email:{email}
                        </p>
                        <p>
                            PassWord:{pass}
                        </p>
                        <Button>Close</Button>
                        </Card.Body>
                    </motion.Card>

                </Row>

            </Container>
        </div>
    );
};

export default Details;