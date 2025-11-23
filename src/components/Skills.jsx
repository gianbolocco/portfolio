import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, useTheme } from '@mui/material';
import { Code, Storage, Build, Brush } from '@mui/icons-material';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Code />,
        skills: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'HTML5', 'CSS3/Sass', 'Material UI', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        icon: <Storage />,
        skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs']
    },
    {
        title: 'Tools',
        icon: <Build />,
        skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'Webpack', 'Vite', 'CI/CD']
    },
    {
        title: 'Design',
        icon: <Brush />,
        skills: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX Principles', 'Agile/Scrum', 'SEO']
    }
];

const Skills = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const { language } = useLanguage();

    return (
        <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2" sx={{ mb: 6, fontWeight: 800, textAlign: 'center' }}>
                    {t(language, 'skills.title')}
                </Typography>
                <Grid container spacing={4} alignItems="stretch">
                    {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    border: `1px solid ${theme.palette.divider}`,
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: '#4285F4'
                                    },
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                                    <Box sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        bgcolor: isDark ? 'rgba(66, 133, 244, 0.2)' : 'rgba(66, 133, 244, 0.1)',
                                        color: '#4285F4',
                                        display: 'flex'
                                    }}>
                                        {category.icon}
                                    </Box>
                                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                                        {category.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, flexGrow: 1, alignContent: 'flex-start' }}>
                                    {category.skills.map((skill) => (
                                        <Chip
                                            key={skill}
                                            label={skill}
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '0.9rem',
                                                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                                '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
