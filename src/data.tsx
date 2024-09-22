// Data Holders for Projects, Articles and Techs

// For Techs: Logo's names
export const TechsNames = new Array<[string, string]>(
    ['typescript.svg', 'Typescript'],
    ['javascript.svg', 'Javascritp'],
    ['nextjs.svg', 'Nextjs'],
    ['nestjs.svg', 'Nestjs'],
    ['express.svg', 'Expressjs'],
    ['nodejs.svg', 'Nodejs'],
    ['react.svg', 'React'],
    ['c.svg', 'C'],
    ['cplusplus.svg', 'C++'],
    ['docker.svg', 'Docker'],
    ['html5.svg', 'HTML5'],
    ['css3.svg', 'CSS3'],
    ['npm.svg', 'NPM'],
    ['postgresql.svg', 'PostgreSQL'],
    ['github.svg', 'Git/GitHub'],
    ['tailwindcss.svg', 'TailwindCSS'],
    ['storybook.svg', 'StoryBook'],
    ['bash.svg', 'Bash'],
    ['linux.svg', 'Linux'],
    ['figma.svg', 'Figma'],
);

export interface Itemdata {
    name        :string,
    link        :string,
    description ?:string
};

// Projects data
export const Projectsdata = new Array<Itemdata>(
    {
        name: 'Pongy',
        link: 'https://github.com/ADILRAQ/PingPong',
        description: 'A real-time online pong contest website With Next.js, Nest.js, and PostgreSQL'
    },
    {
        name: 'Authentication-Express-MVC',
        link: 'https://github.com/ADILRAQ/Authentication-Express-MVC',
        description: 'Express.js authentication system'
    },
    {
        name: 'Inception',
        link: 'https://github.com/ADILRAQ/Inception-42-cursus',
        description: 'Docker Virtualization Project'
    },
    {
        name: 'IRC Server',
        link: 'https://github.com/ADILRAQ/Ft_irc-42-cursus',
        description: 'IRC (Internet Relay Chat) server in C++, is a text-based communication protocol that enables real-time messaging, which can be public or private, and allows users to exchange direct messages and join group channels'
    },
);

// Artciles data
export const ArticlesData = new Array<Itemdata>(
    {
        name: 'Explaining MVC as a story: \'ExpressJs\'',
        link: 'https://araq.notion.site/Explaining-MVC-as-a-story-ExpressJs-ad98772c759d4a5c895133118bf48b18?pvs=4',
    },
    {
        name: 'Docker Fundamentals',
        link: 'https://araq.notion.site/Docker-Fundamentals-266a28f6376749b1935e3c2c91bf0333?pvs=4',
    },
    {
        name: 'PIPEX: UNIX mechanism in detail',
        link: 'https://araq.notion.site/PIPEX-UNIX-mechanism-in-detail-bdf7dd955b6a4bcd99852156ca50186c?pvs=4',
    },
);
