import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
const navigate= useNavigate()
    const GotoDetails=()=>{
        navigate('/DashBoard/Details')
}
    return (
        <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <Button  onClick={()=>GotoDetails()}>Click Here</Button>
        </div>
    );
};

export default DashBoard;