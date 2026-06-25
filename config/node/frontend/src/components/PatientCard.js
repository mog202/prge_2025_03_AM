import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";

function PatientCard({ patient }) {
  const firstLetter = patient.name_patient ? patient.name_patient[0].toUpperCase() : 'P';

  return (
    <div className="patientCard" style={{ height: '100%' }}>
      <Card
        sx={{
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0',
          height: '100%',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#2f855a', fontWeight: 600 }} aria-label='patient'>
              {firstLetter}
            </Avatar>
          }
          title={
            <Typography variant="subtitle1" sx={{ color: '#276749', fontWeight: 600 }}>
              {patient.name_patient}
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: '#718096' }}>
              Płeć: {patient.gender || 'Brak danych'}
            </Typography>
          }
        />

        <CardContent sx={{ pt: 0, flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: '#4a5568' }}>
                <strong>Telefon:</strong> {patient.phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: '#4a5568' }}>
                <strong>Adres:</strong> {patient.location}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: '#4a5568' }}>
                <strong>PESEL:</strong> {patient.pesel}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default PatientCard;