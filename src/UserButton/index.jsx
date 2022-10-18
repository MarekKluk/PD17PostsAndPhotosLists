import React from "react";
import Button from '@mui/material/Button';

export function UserButton({ user, onUserClick, activeButton }) {

    const handleUserButtonClick = () => {
        onUserClick(user.id)
    }

    return <Button  sx={{backgroundColor: activeButton? 'orange' : 'white'}} variant="outlined" onClick={handleUserButtonClick}> {user.username} </Button>;
}