import React from 'react';
import { Container, Grid, Typography, Box, useTheme } from '@mui/material';
import { useLanguage } from '../LanguageContext';
import { t, translations } from '../translations';

const About = () => {
    const theme = useTheme();
    const { language } = useLanguage();

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
                            <img src="/img/profile.jpg" alt="Gianlucca Bolocco" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 800 }}>
                            {t(language, 'about.title')}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                            {t(language, 'about.p1')}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                            {t(language, 'about.p2')}
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                {t(language, 'about.whyWorkWithMe')}
                            </Typography>
                            <Grid container spacing={2}>
                                {translations[language].about.qualities.map((item) => (
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
