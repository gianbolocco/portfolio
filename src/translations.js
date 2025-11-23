export const translations = {
    es: {
        // Header
        nav: {
            inicio: 'Inicio',
            sobreMi: 'Sobre Mí',
            habilidades: 'Habilidades',
            proyectos: 'Proyectos',

        },
        // Hero
        hero: {
            title: 'Fullstack',
            titleHighlight: 'Developer',
            subtitle: 'Creando experiencias digitales modernas y funcionales.',
            verProyectos: 'Ver Proyectos',
            descargarCV: 'Descargar CV',
        },
        // About
        about: {
            title: 'Sobre Mí',
            p1: 'Soy un desarrollador Fullstack apasionado por crear soluciones digitales que impacten. Con una sólida base en tecnologías web modernas, me especializo en construir aplicaciones escalables y experiencias de usuario intuitivas.',
            p2: 'Mi enfoque combina la precisión técnica con la creatividad visual. Me encanta resolver problemas complejos y mantenerme al día con las últimas tendencias en desarrollo de software.',
            whyWorkWithMe: '¿Por qué trabajar conmigo?',
            qualities: [
                'Comunicación Clara',
                'Código Limpio',
                'Diseño Centrado en Usuario',
                'Aprendizaje Continuo'
            ]
        },
        // Skills
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Tecnologías y herramientas con las que trabajo',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Base de Datos',
                tools: 'Herramientas'
            }
        },
        // Projects
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Algunos de mis trabajos más recientes',
            demo: 'Demo',
            github: 'GitHub',
            tecnologias: 'Tecnologías'
        },
        // Contact

        // Footer
        footer: {
            derechos: 'Todos los derechos reservados.'
        }
    },
    en: {
        // Header
        nav: {
            inicio: 'Home',
            sobreMi: 'About Me',
            habilidades: 'Skills',
            proyectos: 'Projects',

        },
        // Hero
        hero: {
            title: 'Fullstack',
            titleHighlight: 'Developer',
            subtitle: 'Creating modern and functional digital experiences.',
            verProyectos: 'View Projects',
            descargarCV: 'Download CV',
        },
        // About
        about: {
            title: 'About Me',
            p1: 'I am a Fullstack developer passionate about creating impactful digital solutions. With a solid foundation in modern web technologies, I specialize in building scalable applications and intuitive user experiences.',
            p2: 'My approach combines technical precision with visual creativity. I love solving complex problems and keeping up with the latest trends in software development.',
            whyWorkWithMe: 'Why work with me?',
            qualities: [
                'Clear Communication',
                'Clean Code',
                'User-Centered Design',
                'Continuous Learning'
            ]
        },
        // Skills
        skills: {
            title: 'Technical Skills',
            subtitle: 'Technologies and tools I work with',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Database',
                tools: 'Tools'
            }
        },
        // Projects
        projects: {
            title: 'Featured Projects',
            subtitle: 'Some of my most recent work',
            demo: 'Demo',
            github: 'GitHub',
            tecnologias: 'Technologies'
        },
        // Contact

        // Footer
        footer: {
            derechos: 'All rights reserved.'
        }
    }
};

export const t = (language, key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
        value = value?.[k];
    }

    return value || key;
};
