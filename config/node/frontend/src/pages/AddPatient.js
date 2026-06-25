import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddPatient() {
  const [patientName, setPatientName] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientLocation, setPatientLocation] = useState('');
  const [patientPesel, setPatientPesel] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:10000/app/insert_patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name_patient: patientName,
          gender: patientGender,
          phone: patientPhone,
          location: patientLocation,
          pesel: patientPesel
        })
      });

      if (response.ok) {
        alert('Pacjent został pomyślnie dodany!');
        navigate('/patients');
      } else {
        alert('Wystąpił błąd podczas dodawania pacjenta.');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      className='newpatient__container'
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecf7 100%)',
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 5, borderRadius: '16px', background: 'rgba(255, 255, 255, 0.95)' }}>
          <Typography variant="h5" component="h2" align="center" sx={{ color: '#276749', fontWeight: 700, mb: 1 }}>
            Karta Rejestracji Pacjenta
          </Typography>
          <Typography variant="body2" align="center" sx={{ color: '#718096', mb: 4 }}>
            Wprowadź dane nowego pacjenta do systemu
          </Typography>

          <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField fullWidth variant="outlined" label='Imię i Nazwisko' value={patientName} onChange={(e) => setPatientName(e.target.value)} required />

            <FormControl fullWidth required>
              <InputLabel id="gender-label">Płeć</InputLabel>
              <Select labelId="gender-label" value={patientGender} label="Płeć" onChange={(e) => setPatientGender(e.target.value)}>
                <MenuItem value="Kobieta">Kobieta</MenuItem>
                <MenuItem value="Mężczyzna">Mężczyzna</MenuItem>
                <MenuItem value="Inna">Inna</MenuItem>
              </Select>
            </FormControl>

            <TextField fullWidth variant="outlined" label='Numer telefonu' value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} required />
            <TextField fullWidth variant="outlined" label='Adres (Lokalizacja)' value={patientLocation} onChange={(e) => setPatientLocation(e.target.value)} required />
            <TextField fullWidth variant="outlined" label='Numer PESEL' value={patientPesel} onChange={(e) => setPatientPesel(e.target.value)} required inputProps={{ maxLength: 11 }} />

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant='outlined' fullWidth onClick={() => navigate('/services')} sx={{ borderColor: '#718096', color: '#718096', textTransform: 'none', fontWeight: 600, height: '48px' }}>
                Anuluj
              </Button>
              <Button type='submit' variant='contained' fullWidth sx={{ backgroundColor: '#2f855a', textTransform: 'none', fontWeight: 600, height: '48px', '&:hover': { backgroundColor: '#22543d' } }}>
                Zapisz pacjenta
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default AddPatient;