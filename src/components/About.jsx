import React from 'react';
import { Container, Grid, Typography, Box, useTheme } from '@mui/material';

const About = () => {
    const theme = useTheme();

    return (
        <Box id="about" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        {/* Placeholder for profile image */}
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                bgcolor: 'action.hover',
                                borderRadius: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}
                        >
                            <img src="https://camisetasnani.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-19-at-3.10.26-PM.jpeg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 800 }}>
                            Sobre Mí
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                            Soy un desarrollador Fullstack apasionado por crear soluciones digitales que impacten.
                            Con una sólida base en tecnologías web modernas, me especializo en construir aplicaciones
                            escalables y experiencias de usuario intuitivas.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                            Mi enfoque combina la precisión técnica con la creatividad visual. Me encanta resolver
                            problemas complejos y mantenerme al día con las últimas tendencias en desarrollo de software.
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                ¿Por qué trabajar conmigo?
                            </Typography>
                            <Grid container spacing={2}>
                                {['Comunicación Clara', 'Código Limpio', 'Diseño Centrado en Usuario', 'Aprendizaje Continuo'].map((item) => (
                                    <Grid item xs={6} key={item}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4285F4' }} />
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>{item}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
