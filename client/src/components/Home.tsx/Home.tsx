import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import { modalStyle, containerStyle, buttonMargin } from '../style'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField/TextField';

export default function Home() {
    const [input, setInput] = useState('')

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (data: any) => {
        console.log("Creating Game", data)
    }

    return (
        <Container sx={containerStyle}>
            <Button sx={buttonMargin} variant='outlined' color='secondary' onClick={handleOpen}>Profile</Button>
            <Button sx={buttonMargin} variant='outlined' color='secondary' onClick={handleOpen}>Dashboard</Button>
            <Button sx={buttonMargin} variant='contained' onClick={handleOpen}>Create a new Game</Button>
            {/* Create game modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={handleSubmit} sx={{modalStyle}} noValidate autoComplete="off">
                    <TextField id="Game Name" label="Game Name" variant="outlined" value={input} onChange={e => setInput(e.target.value)}/>
            </Box>
            </Modal>
        </Container>
  );
}
 