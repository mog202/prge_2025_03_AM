import React, {Component} from 'react';
import {Typography, Button} from "@mui/material"
import './Home.css';
import {Link} from 'react-router-dom'
function Home() {
        return (
            <div className="home">
                <hi className="home__title">GEOPORTAL</hi>

                <Typography className="home__subtitle"> Geoportal tematyczny poświęcony danym przestrzennym</Typography>

                <Button
                    className="home__button"
                    variant="contained"
                    size="large"
                    component={Link}
                    to = 'services'
                >
                    START
                </Button>
            </div>
        )
}

export default Home;
