import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Box className="home__card">
                <Typography variant="h3" component="h1" className="home__title">
                    MedManager
                </Typography>

                <Typography variant="h6" component="h2" className="home__subtitle">
                    System zarządzania przychodniami lekarskimi i pacjentami
                </Typography>

                <Button
                    className="home__button"
                    variant="contained"
                    size="large"
                    component={Link}
                    to="services"
                >
                    Uruchom system
                </Button>
            </Box>
        </div>
    );
}

export default Home;