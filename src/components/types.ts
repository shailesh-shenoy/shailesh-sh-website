export interface Skill {
    name: string;
    imageUrl: string;
}

export const allSkills: Record<string, Skill> = {
    "Solidity": {
        name: "Solidity",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    },
    "React": {
        name: 'React',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    // Add more skills here
    "TypeScript": {
        name: 'TypeScript',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    "Python": {
        name: 'Python',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    "MongoDB": {
        name: 'MongoDB',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    "C#": {
        name: 'C#',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    },
    "Go": {
        name: 'Go',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    },
    "Unity": {
        name: 'Unity',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
    },
    "NextJS": {
        name: 'NextJS',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
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
        description: "A customizable cellular automata used to explore and visualize the Prisoner's Dilemma with various strategies.",
        imageUrl: '/projects/dilemmata.jpg',
        link: "#Projects",
        github: "",
        pageLink: '/projects/gameofdilemmas',
        skills: ['Unity', "C#"]
    },

];

export const mailToText = `mailto:shenoy.shailesh97@gmail.com?subject=Reaching%20out%20from%20your%20portfolio`;