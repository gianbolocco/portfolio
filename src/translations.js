export const translations = {
    es: {
        // Header
        nav: {
            inicio: 'Inicio',
            sobreMi: 'Sobre Mí',
            habilidades: 'Habilidades',
            proyectos: 'Proyectos',
            contacto: 'Contacto',
        },
        // Hero
        hero: {
            title: 'Gianlucca',
            titleHighlight: 'Bolocco',
            verProyectos: 'Ver Proyectos',
            descargarCV: 'Descargar CV',
        },
        // About
        about: {},
        // Skills
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Tecnologías y herramientas con las que trabajo',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Base de Datos',
                tools: 'Herramientas',
                testing: 'Testing'
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
        contact: {
            title: 'Contacto',
            phone: 'Teléfono',
            email: 'Email',
            location: 'Ubicación',
            copy: 'Copiar',
            copied: '¡Copiado al portapapeles!',
            visit: 'Visitar perfil'
        },
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
            contacto: 'Contact',
        },
        // Hero
        hero: {
            title: 'Gianlucca',
            titleHighlight: 'Bolocco',
            verProyectos: 'View Projects',
            descargarCV: 'Download CV',
        },
        // About
        about: {},
        // Skills
        skills: {
            title: 'Technical Skills',
            subtitle: 'Technologies and tools I work with',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Database',
                tools: 'Tools',
                testing: 'Testing'
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
        contact: {
            title: 'Contact',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            copy: 'Copy',
            copied: 'Copied to clipboard!',
            visit: 'Visit profile'
        },
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
