import React, { useState } from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Download } from '@mui/icons-material';

const SocialFloat = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <GitHub />,
            url: 'https://github.com/gianbolocco',
            color: isDark ? '#fff' : '#000',
            hoverColor: '#6e5494'
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn />,
            url: 'https://www.linkedin.com/in/gianlucca-bolocco-995bbb21b/',
            color: '#0A66C2',
            hoverColor: '#084d94'
        },
        {
            name: 'Descargar CV',
            icon: <Download />,
            url: './CV-Gianlucca-Bolocco.pdf',
            download: 'CV-Gianlucca-Bolocco.pdf',
            color: '#4285F4',
            hoverColor: '#3367D6'
        }
    ];

    return (
        <Box
            sx={{
                position: 'fixed',
                right: 30,
                bottom: 30,
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                '@media (max-width: 600px)': {
                    right: 20,
                    bottom: 20,
                }
            }}
        >
            {socialLinks.map((social) => (
                <Tooltip
                    key={social.name}
                    title={social.name}
                    placement="left"
                    arrow
                >
                    <IconButton
                        href={social.url}
                        download={social.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            width: 56,
                            height: 56,
                            bgcolor: 'background.paper',
                            border: `2px solid ${theme.palette.divider}`,
                            color: social.color,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                                bgcolor: social.hoverColor,
                                color: '#fff',
                                transform: 'translateY(-4px) scale(1.05)',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                borderColor: social.hoverColor,
                            },
                            '@media (max-width: 600px)': {
                                width: 48,
                                height: 48,
                            }
                        }}
                    >
                        {social.icon}
                    </IconButton>
                </Tooltip>
            ))}

            {/* Indicador decorativo */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: -10,
                    transform: 'translateY(-50%)',
                    width: 3,
                    height: 80,
                    background: `linear-gradient(to bottom, ${isDark ? 'rgba(66, 133, 244, 0.3)' : 'rgba(66, 133, 244, 0.2)'}, transparent)`,
                    borderRadius: 10,
                    zIndex: -1
                }}
            />
        </Box>
    );
};

export default SocialFloat;
