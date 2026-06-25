import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Grid, CircularProgress, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PatientCard from "../components/PatientCard";

function PatientList() {
  const [patients, setPatients] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:10000/app/patients_dynamic')
      .then(res => {
        if (!res.ok) throw new Error('Problem z pobieraniem danych');
        return res.json();
      })
      .then(res => {
        setPatients(res);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const patientsList = patients && Array.isArray(patients.data) ? patients.data : [];

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecf7 100%)', padding: '40px 20px', boxSizing: 'border-box' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h4" component="h1" sx={{ color: '#276749', fontWeight: 700 }}>Baza Pacjentów</Typography>
            <Typography variant="body1" sx={{ color: '#718096', mt: 0.5 }}>Lista pacjentów zarejestrowanych w systemie</Typography>
          </Box>
          <Button variant="outlined" onClick={() => navigate('/services')} sx={{ borderColor: '#2f855a', color: '#2f855a', textTransform: 'none', fontWeight: 600, borderRadius: '8px', padding: '8px 20px', '&:hover': { borderColor: '#22543d', backgroundColor: 'rgba(47, 133, 90, 0.05)' } }}>
            Wróć do panelu
          </Button>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}><CircularProgress sx={{ color: '#2f855a' }} /></Box>
        ) : patientsList.length > 0 ? (
          <Grid container spacing={3}>
            {patientsList.map(patient => (
              <Grid item xs={12} sm={6} md={4} key={patient.id || patient._id}>
                <Box sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                  <PatientCard patient={patient} />
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper elevation={1} sx={{ p: 5, textAlign: 'center', borderRadius: '12px', color: '#718096', background: 'rgba(255, 255, 255, 0.6)' }}>
            <Typography variant="h6">Brak zarejestrowanych pacjentów</Typography>
            <Typography variant="body2">Użyj formularza dodawania, aby wprowadzić nowego pacjenta do bazy.</Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}

export default PatientList;