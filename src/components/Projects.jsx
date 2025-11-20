import React, { useState, useEffect } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Button, Box, Chip, useTheme } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
        images: [
            'https://via.placeholder.com/600x400/2196f3/ffffff?text=Ecommerce+Home',
            'https://via.placeholder.com/600x400/1976d2/ffffff?text=Ecommerce+Cart',
            'https://via.placeholder.com/600x400/0d47a1/ffffff?text=Ecommerce+Admin'
        ],
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        demoLink: 'https://tiendasool.netlify.app/',
        githubLink: '#'
    },
    {
        title: 'Task Management App',
        description: 'Aplicación de gestión de tareas colaborativa con actualizaciones en tiempo real y asignación de roles.',
        images: [
            'https://via.placeholder.com/600x400/4caf50/ffffff?text=Tasks+Dashboard',
            'https://via.placeholder.com/600x400/388e3c/ffffff?text=Tasks+Kanban',
            'https://via.placeholder.com/600x400/1b5e20/ffffff?text=Tasks+Profile'
        ],
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        demoLink: '#',
        githubLink: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'Este mismo sitio web, construido con las últimas tecnologías web y diseño 3D interactivo.',
        images: [
            'https://via.placeholder.com/600x400/9c27b0/ffffff?text=Portfolio+Hero',
            'https://via.placeholder.com/600x400/7b1fa2/ffffff?text=Portfolio+Projects',
            'https://via.placeholder.com/600x400/4a148c/ffffff?text=Portfolio+Contact'
        ],
        tags: ['React', 'Three.js', 'MUI'],
        demoLink: '#',
        githubLink: '#'
    }
];

const ProjectCard = ({ project }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [project.images.length]);

    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '45%', md: 400 },
                maxWidth: 450,
                height: 500,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                borderRadius: 4,
                boxShadow: 'none',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'transform 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: theme.palette.primary.main
                },
                overflow: 'hidden',
                flexShrink: 0
            }}
        >
            <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                {project.images.map((img, index) => (
                    <CardMedia
                        key={index}
                        component="img"
                        height="200"
                        image={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    />
                ))}
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, flexGrow: 1 }}>
                    {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                                fontWeight: 500,
                                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                border: '1px solid transparent'
                            }}
                        />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="contained"
                        startIcon={<Launch />}
                        fullWidth
                        href={project.demoLink}
                        target="_blank"
                        sx={{
                            fontWeight: 700,
                            bgcolor: 'text.primary',
                            color: 'background.paper',
                            '&:hover': { bgcolor: 'text.secondary' }
                        }}
                    >
                        Ver Demo
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        fullWidth
                        href={project.githubLink}
                        target="_blank"
                        sx={{
                            fontWeight: 700,
                            borderColor: 'text.primary',
                            color: 'text.primary',
                            borderWidth: 2,
                            '&:hover': { borderWidth: 2, bgcolor: 'action.hover' }
                        }}
                    >
                        GitHub
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2" sx={{ mb: 6, fontWeight: 800, textAlign: 'center' }}>
                    Proyectos Destacados
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 3, md: 4 },
                    justifyContent: 'center'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
