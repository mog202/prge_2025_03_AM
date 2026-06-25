import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";

function UserCard({ user }) {
    // Zabezpieczenie na wypadek, gdyby imię było puste
    const firstLetter = user.name ? user.name[0].toUpperCase() : 'L';

    return (
        <div className="userCard" style={{ height: '100%' }}>
            <Card
                sx={{
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e2e8f0',
                    height: '100%',
                    background: '#ffffff'
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{
                                bgcolor: '#2c5282', // ładny medyczny niebieski
                                fontWeight: 600
                            }}
                            aria-label='doctor'
                        >
                            {firstLetter}
                        </Avatar>
                    }
                    title={
                        <Typography variant="subtitle1" sx={{ color: '#1a365d', fontWeight: 600 }}>
                            {user.name}
                        </Typography>
                    }
                    subheader={
                        <Typography variant="body2" sx={{ color: '#718096' }}>
                            Miasto: {user.location}
                        </Typography>
                    }
                />

                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body2" sx={{ color: '#4a5568' }}>
                        <strong>Gabinet:</strong> {user.posts}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default UserCard;