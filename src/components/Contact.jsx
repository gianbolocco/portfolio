import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, Tooltip, Snackbar, Alert, useTheme } from '@mui/material';
import { Phone, Email, LinkedIn, LocationOn, ContentCopy } from '@mui/icons-material';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';
import contactData from '../data/contact.json';

const Contact = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const { language } = useLanguage();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const contactItems = [
        {
            icon: <Phone />,
            label: t(language, 'contact.phone'),
            value: contactData.phone,
            action: () => handleCopy(contactData.phone),
            actionIcon: <ContentCopy />,
            tooltip: t(language, 'contact.copy')
        },
        {
            icon: <Email />,
            label: t(language, 'contact.email'),
            value: contactData.email,
            action: () => handleCopy(contactData.email),
            actionIcon: <ContentCopy />,
            tooltip: t(language, 'contact.copy')
        },
        {
            icon: <LinkedIn />,
            label: 'LinkedIn',
            value: 'Gianlucca Bolocco',
            link: contactData.linkedin,
            tooltip: t(language, 'contact.visit')
        },
        {
            icon: <LocationOn />,
            label: t(language, 'contact.location'),
            value: contactData.location,
            tooltip: ''
        }
    ];

    return (
        <Box
            id="contact"
            sx={{
                py: 10,
                bgcolor: 'background.default',
                transition: 'background-color 0.3s ease'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        mb: 6,
                        fontWeight: 800,
                        textAlign: 'center'
                    }}
                >
                    {t(language, 'contact.title')}
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {contactItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    border: `1px solid ${theme.palette.divider}`,
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: '#4285F4'
                                    }
                                }}
                            >
                                <Box sx={{
                                    p: 1.5,
                                    borderRadius: 2,
                                    bgcolor: isDark ? 'rgba(66, 133, 244, 0.2)' : 'rgba(66, 133, 244, 0.1)',
                                    color: '#4285F4',
                                    display: 'flex',
                                    mb: 2
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                                    {item.label}
                                </Typography>

                                {item.link ? (
                                    <Typography
                                        component="a"
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'text.secondary',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            '&:hover': { color: 'primary.main' }
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                ) : (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                        <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                                            {item.value}
                                        </Typography>
                                        {item.action && (
                                            <Tooltip title={item.tooltip}>
                                                <IconButton size="small" onClick={item.action} sx={{ ml: 0.5 }}>
                                                    {item.actionIcon}
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    </Box>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {t(language, 'contact.copied')}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
