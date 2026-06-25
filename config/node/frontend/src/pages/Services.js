import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
    return (
        <div className='services'>
            <Box className='services__container'>
                <Typography variant="h4" component="h2" className='services__title'>
                    Panel Zarządzania Przychodnią
                </Typography>
                <Typography variant="body1" className='services__subtitle'>
                    Wybierz operację, którą chcesz wykonać
                </Typography>

                <div className='services__grid'>
                    <Button
                        className="services__button services__button--map"
                        variant="contained"
                        size="large"
                        component={Link}
                        to='/map'
                    >
                        Mapa przychodni
                    </Button>

                    {/* Sekcja Lekarzy (Stare komponenty) */}
                    <Button
                        className="services__button services__button--doctor"
                        variant="contained"
                        size="large"
                        component={Link}
                        to='/add-doctor'
                    >
                        Dodaj lekarza
                    </Button>

                    <Button
                        className="services__button services__button--doctor"
                        variant="contained"
                        size="large"
                        component={Link}
                        to='/doctors'
                    >
                        Lista lekarzy
                    </Button>

                    {/* Sekcja Pacjentów (Nowe komponenty) */}
                    <Button
                        className="services__button services__button--patient"
                        variant="contained"
                        size="large"
                        component={Link}
                        to='/add-patient'
                    >
                        Dodaj pacjenta
                    </Button>

                    <Button
                        className="services__button services__button--patient"
                        variant="contained"
                        size="large"
                        component={Link}
                        to='/patients'
                    >
                        Lista pacjentów
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default Services;