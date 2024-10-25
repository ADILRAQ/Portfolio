// Data Holders for Projects, Articles and Techs

// For Social Links

export type LinkShape = {
    media   :'LinkedIn' | 'Github';
}

export const Links :Record<LinkShape['media'], string> = {
    LinkedIn: 'https://www.linkedin.com/in/adil-raqioui',
    Github: 'https://github.com/ADILRAQ',
}

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

export type Status = {
    content     :string,
    status      :boolean
}

export type Itemdata = {
    name        :string;
    link        :string;
    description ?:string;
    techs       ?:string[];
    status      ?:Status
};

// Projects data
export const Projectsdata = new Array<Itemdata>(
    {
        name: 'Pongy',
        link: 'https://github.com/ADILRAQ/PingPong',
        description: 'Pongy is a web-based multiplayer Pong game where users can play against each other in real-time, chat, and manage their user profiles. The project leverages modern web technologies to provide a seamless and engaging user experience.',
        status: {
            content: 'Done',
            status: true,
        },
        techs: ['NextJs', 'NestJs', 'PostgreSQL', 'Docker', 'Prisma', 'Tailwind']
    },
    {
        name: 'Authentication-Express-MVC',
        link: 'https://github.com/ADILRAQ/Authentication-Express-MVC',
        description: 'This project is an authentication system built using ExpressJs with both manual and Google authentication options. The project follows the MVC (Model-View-Controller) architecture and uses a Singleton pattern for user storage.',
        status: {
            content: 'Done',
            status: true,
        },
        techs: ['ExpressJS', 'EJS', 'JWT', 'MVC Architecture']
    },
    {
        name: 'Inception',
        link: 'https://github.com/ADILRAQ/Inception-42-cursus',
        description: 'Docker Virtualization Project. This project aims to broaden your knowledge of system administration by using Docker. You will virtualize several Docker images, creating them in your new personal virtual machine.',
        status: {
            content: 'Done',
            status: true,
        },
        techs: ['Docker', 'Docker-compose', 'NginX', 'MariaDB', 'Wordpress']
    },
    {
        name: 'IRC Server',
        link: 'https://github.com/ADILRAQ/Ft_irc-42-cursus',
        description: 'IRC (Internet Relay Chat) server in C++, is a text-based communication protocol that enables real-time messaging, which can be public or private, and allows users to exchange direct messages and join group channels',
        status: {
            content: 'Done',
            status: true,
        },
        techs: ['C++', 'Sockets', 'Networking', 'LimeChat']
    },
);

// Artciles data
export const ArticlesData = new Array<Itemdata>(
    {
        name: "Explaining MVC as a story: 'ExpressJs'",
        link: 'https://araq.notion.site/Explaining-MVC-as-a-story-ExpressJs-ad98772c759d4a5c895133118bf48b18?pvs=4',
    },
    {
        name: "Docker Fundamentals",
        link: 'https://araq.notion.site/Docker-Fundamentals-266a28f6376749b1935e3c2c91bf0333?pvs=4',
    },
    {
        name: "PIPEX: UNIX mechanism in detail",
        link: 'https://araq.notion.site/PIPEX-UNIX-mechanism-in-detail-bdf7dd955b6a4bcd99852156ca50186c?pvs=4',
    },
);
