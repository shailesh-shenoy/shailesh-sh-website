export interface Skill {
    name: string;
    imageUrl: string;
}

export const allSkills: Record<string, Skill> = {
    "Solidity": {
        name: "Solidity",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/1200px-Solidity_logo.svg.png",
    },
    "React": {
        name: 'React',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    // Add more skills here
    "TypeScript": {
        name: 'TypeScript',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    },
    "Python": {
        name: 'Python',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    },
    "MongoDB": {
        name: 'MongoDB',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png',
    },
    "PostgreSQL": {
        name: 'PostgreSQL',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
    },
    "AWS": {
        name: 'AWS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    },
    "Go": {
        name: 'Go',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
    },
    "Rust": {
        name: 'Rust',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png',
    }
};


export interface Project {
    name: string;
    description: string;
    imageUrl: string;
    link: string;
    github: string;
    pageLink: string;
    skills?: string[];
}

export const projects: Project[] = [
    {
        name: 'VeriFree',
        description: 'A free avalanche subnet for Verified Students - Runner up prize at Chainlink Constellation hackathon in Avalanche track.',
        imageUrl: '/projects/verifree.png',
        link: 'https://verifree.vercel.app/',
        github: 'https://github.com/shailesh-shenoy/VeriFree',
        pageLink: '/projects/verifree',
        skills: ['Solidity', 'NextJS', 'TypeScript', 'Avalanche', 'Chainlink', 'PolygonID']
    },
    {
        name: 'WagerWinz',
        description: 'A decentralized platform for creating, challenging and winning wagers on the price of ETH/USD.',
        imageUrl: '/projects/wagerwinz.jpg',
        link: 'https://wagerwinz.vercel.app/',
        github: 'https://github.com/shailesh-shenoy/wagerwinz',
        pageLink: '/projects/wagerwinz',
        skills: ['Solidity', 'React', 'Chainlink']
    },
    {
        name: "Prisoner's Dilemmata",
        description: "A cellular automata exploring the Prisoner's Dilemma with various strategies.",
        imageUrl: '/projects/dilemmata.jpg',
        link: "#Projects",
        github: "",
        pageLink: '/projects/gameofdilemmas',
        skills: ['Rust']
    },

];