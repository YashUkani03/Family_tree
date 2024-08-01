import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button'
import { Box, TextField } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

Modal.setAppElement('#root');
const isMobile = window.innerWidth <= 600;
const PersonDetailsModal = ({ isOpen, onRequestClose, person }) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Person Details"
            padding={15}
            style={{
                content: {
                    top: '40%',
                    backgroundColor: 'white',
                    left: '50%',
                    right: '80%',
                    bottom: isMobile ? '80' : '0%',
                    marginRight: isMobile ? '-60%' : '-20%',
                    transform: 'translate(-50%, -50%)'
                },

            }}
        >
            <Button onClick={onRequestClose}  class="btn btn-ghost btn-outline btn-sm"><CloseOutlinedIcon /></Button>
            <div style={{ textAlign: 'center' }} className='flex flex-col py-2 ' >
                <img
                    src={person.photo}
                    alt={`${person.name}photo`}
                    style={{ width: '80px', height: '80px', borderRadius: '50%', margin: 'auto', marginBottom: 30 }}
                />
                <Box mb={2}>
                    <TextField 
                        size='small'
                        variant='outlined'
                        label='Name'
                        InputProps={{ readOnly: true }}
                        fullWidth
                        style={{ color: 'darkgray', borderColor: 'black' }}
                        value={person.name}>
                    </TextField>
                </Box>
                <Box mb={2}>
                    <TextField 
                        size='small'
                        variant='outlined'
                        label='Age'
                        InputProps={{ readOnly: true }}
                        fullWidth
                        style={{ color: 'darkgray', borderColor: 'black' }}
                        value={person.age}>
                    </TextField>
                </Box>
                <Box mb={2}>
                    <TextField 
                        size='small'
                        variant='outlined'
                        label='Date of Birth'
                        InputProps={{ readOnly: true }}
                        fullWidth
                        style={{ color: 'darkgray', borderColor: 'black' }}
                        value={person.DOB}>
                    </TextField>
                </Box>
                <Box mb={2}>
                    <TextField
                        size='small'
                        variant='outlined'
                        label='Date of Death'
                        placeholder='-'
                        InputProps={{ readOnly: true }}
                        fullWidth
                        style={{ color: 'darkgray', borderColor: 'black' }}
                        value={person.DOD || '-'}>
                    </TextField>
                </Box>
                <Box mb={2}>
                    <TextField 
                        size='small'
                        variant='outlined'
                        label='Marital Status'
                        InputProps={{ readOnly: true }}
                        fullWidth
                        style={{ color: 'darkgray', borderColor: 'black' }}
                        value={person.MaritalStatus}>
                    </TextField>
                </Box>
            </div>
        </Modal >
    );
};

export default PersonDetailsModal;
