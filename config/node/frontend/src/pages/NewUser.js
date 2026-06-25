import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NewUser() {
    const [userName, setUserName] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [userPosts, setUserPosts] = useState(0);

    const navigate = useNavigate(); // Hook do powrotu do panelu zarządzania

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userName, userLocation, userPosts);

        try {
            const response = await fetch('http://localhost:10000/app/insert_users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    location: userLocation,
                    posts: userPosts // W bazie danych to liczba – w UI nazwana "Numer gabinetu"
                })
            });

            if (response.ok) {
                alert('Lekarz został pomyślnie dodany!');
                navigate('/services'); // Powrót do menu po udanym dodaniu
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Box
            className='newuser__container'
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center', // Poprawione: camelCase i wartość w apostrofach
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecf7 100%)',
                padding: '20px',
                boxSizing: 'border-box'
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={4}
                    sx={{
                        p: 5,
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                        sx={{ color: '#1a365d', fontWeight: 700, mb: 1 }}
                    >
                        Karta Rejestracji Lekarza
                    </Typography>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ color: '#718096', mb: 4 }}
                    >
                        Wprowadź dane nowego pracownika medycznego
                    </Typography>

                    <Box
                        component='form'
                        onSubmit={(e) => handleSubmit(e)}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label='Imię i Nazwisko lekarza'
                            placeholder="np. dr Jan Kowalski"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />

                        <TextField
                            fullWidth
                            variant="outlined"
                            label='Miejscowość / Przychodnia'
                            placeholder="np. Warszawa, Filia Centralna"
                            value={userLocation}
                            onChange={(e) => setUserLocation(e.target.value)}
                            required
                        />

                        <TextField
                            fullWidth
                            variant="outlined"
                            type="number"
                            label='Numer gabinetu'
                            placeholder="np. 104"
                            value={userPosts || ''}
                            onChange={(e) => setUserPosts(Number(e.target.value))}
                            required
                        />

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Button
                                variant='outlined'
                                fullWidth
                                onClick={() => navigate('/services')}
                                sx={{
                                    borderColor: '#718096',
                                    color: '#718096',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    height: '48px',
                                    '&:hover': { borderColor: '#4a5568', color: '#4a5568' }
                                }}
                            >
                                Anuluj
                            </Button>

                            <Button
                                type='submit'
                                variant='contained'
                                fullWidth
                                sx={{
                                    backgroundColor: '#2c5282',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    height: '48px',
                                    '&:hover': { backgroundColor: '#1a4975' }
                                }}
                            >
                                Zapisz profil
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default NewUser;