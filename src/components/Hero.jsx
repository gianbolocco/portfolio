import React, { useRef, useMemo } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const GalaxyParticles = ({ count = 2000, mouse }) => {
    const mesh = useRef();
    const theme = useTheme();
    const { viewport } = useThree();

    // Google/Antigravity Blue
    const particleColor = new THREE.Color('#4285F4');

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Spiral distribution
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 25 + 1; // Wider spread for full screen
            const spiralOffset = angle + radius * 0.3;

            const x = Math.cos(spiralOffset) * radius;
            const y = (Math.random() - 0.5) * 15; // More vertical spread
            const z = Math.sin(spiralOffset) * radius;

            // Rotation to align with spiral flow
            const rotY = Math.atan2(x, z);

            temp.push({ x, y, z, rotY, speed: Math.random() * 0.01 + 0.005 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();

        // Mouse interaction for global rotation (Parallax effect)
        let targetRotationX = 0;
        let targetRotationY = 0;

        if (mouse.current) {
            // Calculate rotation based on mouse position relative to center
            // mouse.current is [x, y] from center
            targetRotationY = (mouse.current[0] / window.innerWidth) * 0.5; // Rotate Y based on X
            targetRotationX = (mouse.current[1] / window.innerHeight) * 0.5; // Rotate X based on Y
        }

        // Smoothly interpolate current rotation to target
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetRotationX, 0.05);
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetRotationY + time * 0.05, 0.05); // Add continuous rotation

        particles.forEach((particle, i) => {
            // Rotate particles around center (Vortex flow)
            const angle = particle.speed * 10; // Constant flow
            const radius = Math.sqrt(particle.x * particle.x + particle.z * particle.z);
            const currentAngle = Math.atan2(particle.z, particle.x);

            // Calculate new position based on flow
            const newX = Math.cos(currentAngle + particle.speed) * radius;
            const newZ = Math.sin(currentAngle + particle.speed) * radius;

            // Gentle floating
            const newY = particle.y + Math.sin(time + i) * 0.02;

            dummy.position.set(newX, newY, newZ);

            // Align dashes with movement direction
            dummy.rotation.set(0, -currentAngle - particle.speed + Math.PI / 2, 0);

            dummy.scale.set(1, 1, 1);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            {/* Dash geometry: thin and long */}
            <boxGeometry args={[0.05, 0.05, 0.8]} />
            <meshBasicMaterial color={particleColor} transparent opacity={0.8} />
        </instancedMesh>
    );
};

const Hero = () => {
    const mouse = useRef([0, 0]);
    const theme = useTheme();

    return (
        <Box
            id="hero"
            onMouseMove={(e) => (mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2])}
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'background.default',
                transition: 'background-color 0.3s ease',
            }}
        >
            {/* Content Container - zIndex higher to sit on top of canvas */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Box sx={{ pointerEvents: 'auto' }}>
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    mb: 2,
                                    fontWeight: 800,
                                    fontSize: { xs: '3rem', md: '5rem' },
                                    color: 'text.primary',
                                    letterSpacing: '-0.02em',
                                    textShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0,0,0,0.5)' : 'none'
                                }}
                            >
                                Fullstack
                                <br />
                                <Box component="span" sx={{ color: '#4285F4' }}>Developer</Box>
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    mb: 4,
                                    maxWidth: '600px',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    textShadow: theme.palette.mode === 'dark' ? '0 2px 10px rgba(0,0,0,0.5)' : 'none'
                                }}
                            >
                                Creando experiencias digitales modernas y funcionales.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: '#4285F4',
                                        color: '#fff',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        boxShadow: '0 10px 20px rgba(66, 133, 244, 0.3)',
                                        '&:hover': {
                                            bgcolor: '#3367D6',
                                            boxShadow: '0 15px 30px rgba(66, 133, 244, 0.4)',
                                        }
                                    }}
                                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Ver Proyectos
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'text.primary',
                                        color: 'text.primary',
                                        borderWidth: 2,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        fontWeight: 700,
                                        '&:hover': {
                                            borderWidth: 2,
                                            bgcolor: 'rgba(66, 133, 244, 0.1)',
                                            borderColor: '#4285F4',
                                            color: '#4285F4'
                                        }
                                    }}
                                    href="/cv.pdf"
                                    target="_blank"
                                >
                                    Descargar CV
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Full Screen 3D Canvas Background */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
                    <ambientLight intensity={0.5} />
                    <GalaxyParticles mouse={mouse} />
                </Canvas>
            </Box>
        </Box>
    );
};

export default Hero;
