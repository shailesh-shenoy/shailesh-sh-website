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
    "AWS": {
        name: 'AWS',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    "NextJS": {
        name: 'NextJS',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    "Postgres": {
        name: 'Postgres',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    "Unity": {
        name: 'Unity',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
    },
    "Java": {
        name: 'Java',
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
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
    disabled?: boolean;
}

export const projects: Project[] = [
    {
        name: 'VeriFree',
        description: `A permissioned blockchain where students with a valid educational email address can gain access to a student-led DAO as well as free transactions on the verifree Subnet.
        Runner up prize at Chainlink Constellation hackathon in Avalanche track.`,
        imageUrl: '/projects/verifree.png',
        link: 'https://verifree.vercel.app/',
        github: 'https://github.com/shailesh-shenoy/VeriFree',
        pageLink: '/projects/verifree',
        skills: ['Solidity', 'NextJS', 'MongoDB', 'TypeScript']
    },
    {
        name: 'WagerWinz',
        description: 'A decentralized, P2P platform for creating, challenging and winning wagers on the price of ETH/USD using smart contracts and Chainlink price feed.',
        imageUrl: '/projects/wagerwinz.jpg',
        link: 'https://wagerwinz.vercel.app/',
        github: 'https://github.com/shailesh-shenoy/wagerwinz',
        pageLink: '/projects/wagerwinz',
        skills: ['Solidity', 'React', 'Chainlink']
    },
    {
        name: "AllCoinz",
        description: "A simple and easy-to-use crypto portfolio aggregator which let's you track all your coins across top exchanges and blockchains. View your portfolio on the web app or integrate into your own tools using the REST API. Work in Progress.",
        imageUrl: '/projects/allcoinz.png',
        link: "#Projects",
        github: "",
        pageLink: '/projects/allcoinz',
        skills: ['Go', "React", "Postgres", "AWS"],
        disabled: true
    },

];

export const mailToText = `mailto:shenoy.sh@northeastern.edu?subject=Reaching%20out%20from%20your%20portfolio`;