import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Contact = () => {
    return (
        <Box id="contact" sx={{ py: 12, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h2" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
                            Hablemos
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
                            ¿Tienes un proyecto en mente o simplemente quieres saludar?
                            Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="github" color="inherit" href="https://github.com" target="_blank">
                                <GitHub fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="linkedin" color="inherit" href="https://linkedin.com" target="_blank">
                                <LinkedIn fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="email" color="inherit" href="mailto:email@example.com">
                                <Email fontSize="large" />
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box component="form" noValidate autoComplete="off">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Nombre"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Mensaje"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            bgcolor: '#fff',
                                            color: '#000',
                                            '&:hover': { bgcolor: '#e0e0e0' }
                                        }}
                                    >
                                        Enviar Mensaje
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
