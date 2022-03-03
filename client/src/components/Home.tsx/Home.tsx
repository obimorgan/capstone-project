import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField/TextField';
import React, { FormEvent, useEffect, useState } from 'react';
import { buttonMargin, containerStyle, modalStyle } from '../style';
import { useNavigate } from 'react-router';
import { io } from 'socket.io-client'

const   ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, {transports: ["websocket"]})

export default function Home() {
    const navigate = useNavigate()
    const [gameName, setGameName] = useState('')

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    // when a user clicks on "create a new game"
    const handleOpen = () => {
        setOpen(true)
    }

    //2 Creatign a new game
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        socket.emit("create a game", ({gameName: gameName})) //can send any data!
        console.log("Creating a new Game", gameName)
        setOpen(false)
        navigate('lobby')
    }

    useEffect(() => {
        //1 trapping connection from  server
        socket.on('connect', () => {
            console.log("connection is established!")
        })
    }, [])

    return (
        <Container sx={containerStyle}>
            <Button sx={buttonMargin} variant='contained' onClick={handleOpen}>Create a new Game</Button>
            <Button sx={buttonMargin} variant='contained' onClick={handleOpen}>join a game</Button>
            <Button sx={buttonMargin} variant='outlined' color='secondary' onClick={handleOpen}>Profile</Button>
            <Button sx={buttonMargin} variant='outlined' color='secondary' onClick={handleOpen}>Dashboard</Button>

            {/* Create game modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={handleSubmit} sx={modalStyle} noValidate autoComplete="off">
                    <TextField id="Game Name" label="Game Name" variant="outlined" value={gameName} onChange={e => setGameName(e.target.value)}/>
            </Box>
            </Modal>
        </Container>
  );
}

 