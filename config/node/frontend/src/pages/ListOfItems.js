import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Grid, CircularProgress, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserCard from "../components/UserCard";

function ListOfItems() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:10000/app/users_dynamic')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Problem z pobieraniem danych');
                }
                return res.json();
            })
            .then(res => {
                console.log("Pobrane dane:", res);
                setUsers(res);
                setLoading(false);
            })
            .catch(err => {
                console.error("Błąd fetch:", err);
                setLoading(false);
            });
    }, []);

    const usersList = Array.isArray(users) ? users : users.data || [];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecf7 100%)',
                padding: '40px 20px',
                boxSizing: 'border-box'
            }}
        >
            <Container maxWidth="lg">
                {/* Nagłówek i Przycisk Powrotu */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '40px',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2
                    }}
                >
                    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography variant="h4" component="h1" sx={{ color: '#1a365d', fontWeight: 700 }}>
                            Baza Kadry Medycznej
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#718096', mt: 0.5 }}>
                            Lista lekarzy i personelu przypisanego do placówek
                        </Typography>
                    </Box>

                    <Button
                        variant="outlined"
                        onClick={() => navigate('/services')}
                        sx={{
                            borderColor: '#2c5282',
                            color: '#2c5282',
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: '8px',
                            padding: '8px 20px',
                            '&:hover': {
                                borderColor: '#1a4975',
                                backgroundColor: 'rgba(44, 82, 130, 0.05)'
                            }
                        }}
                    >
                        Wróć do panelu
                    </Button>
                </Box>

                {/* Główna sekcja wyświetlania danych */}
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <CircularProgress sx={{ color: '#2c5282' }} />
                    </Box>
                ) : usersList.length > 0 ? (
                    <Grid container spacing={3}>
                        {usersList.map(user => (
                            <Grid item xs={12} sm={6} md={4} key={user.id || user._id}>
                                <Box sx={{
                                    height: '100%',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                    }
                                }}>
                                    <UserCard user={user} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Paper
                        elevation={1}
                        sx={{
                            p: 5,
                            textAlign: 'center',
                            borderRadius: '12px',
                            color: '#718096',
                            background: 'rgba(255, 255, 255, 0.6)'
                        }}
                    >
                        <Typography variant="h6">Brak zarejestrowanych lekarzy</Typography>
                        <Typography variant="body2">Użyj formularza dodawania, aby wprowadzić nowego lekarza do systemu.</Typography>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}

export default ListOfItems;