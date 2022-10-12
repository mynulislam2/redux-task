import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShowDetail } from '../../redux/Features/LoggedInPerson/LoggedInPerson';

const DashBoard = () => {
    const dispatch=useDispatch()
useEffect(() => {
    dispatch(ShowDetail({isShowDetails:()=>true}))
}, []);

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