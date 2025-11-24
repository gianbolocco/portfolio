import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7, Translate } from '@mui/icons-material';
import { useColorMode } from '../ColorModeContext';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

const Header = (props) => {
    const theme = useTheme();
    const { toggleColorMode, mode } = useColorMode();
    const { language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navItems = [
        { label: t(language, 'nav.inicio'), id: 'hero' },
        { label: t(language, 'nav.sobreMi'), id: 'about' },
        { label: t(language, 'nav.proyectos'), id: 'projects' },
        { label: t(language, 'nav.habilidades'), id: 'skills' },

    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: scrolled ? (theme.palette.mode === 'dark' ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)') : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                py: 1,
                borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '-0.05em',
                            cursor: 'pointer',
                            color: 'text.primary'
                        }}
                        onClick={() => scrollToSection('hero')}
                    >
                        GB.
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                sx={{
                                    color: 'text.primary',
                                    ml: 2,
                                    fontWeight: 500,
                                    '&:hover': { opacity: 0.7, background: 'transparent' }
                                }}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button
                            sx={{
                                ml: 2,
                                color: 'text.primary',
                                fontWeight: 600,
                                minWidth: '50px',
                                '&:hover': { bgcolor: 'rgba(66, 133, 244, 0.1)' }
                            }}
                            onClick={toggleLanguage}
                        >
                            {language === 'es' ? 'EN' : 'ES'}
                        </Button>
                        <IconButton sx={{ ml: 2 }} onClick={toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
