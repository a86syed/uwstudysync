import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navigation from "../Navigation";

const MyProfile = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navigation />
            <div style={{ margin: '20px' }}>
                My Profile
                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" onClick={() => navigate('/myposts')}>My Posts</Button>
                </div>
            </div>
        </>
    );
}

export default MyProfile;
