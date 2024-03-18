export interface Skill {
    name: string;
    iconClass: string;
}

export const allSkills: Record<string, Skill> = {
    "Solidity": {
        name: "Solidity",
        iconClass: "devicon-solidity-plain",
    },
    "React": {
        name: 'React',
        iconClass: 'devicon-react-original',
    },
    // Add more skills here
    "TypeScript": {
        name: 'TypeScript',
        iconClass: 'devicon-typescript-plain',
    },
    "Python": {
        name: 'Python',
        iconClass: 'devicon-python-plain',
    },
    "MongoDB": {
        name: 'MongoDB',
        iconClass: 'devicon-mongodb-plain',
    },
    "C#": {
        name: 'C#',
        iconClass: 'devicon-csharp-plain',
    },
    "Go": {
        name: 'Go',
        iconClass: 'devicon-go-plain',
    },
    "AWS": {
        name: 'AWS',
        iconClass: 'devicon-amazonwebservices-plain',
    },
    "NextJS": {
        name: 'NextJS',
        iconClass: 'devicon-nextjs-plain',
    },
    "Postgres": {
        name: 'Postgres',
        iconClass: 'devicon-postgresql-plain',
    },
    "Unity": {
        name: 'Unity',
        iconClass: 'devicon-unity-plain',
    },
    "Java": {
        name: 'Java',
        iconClass: 'devicon-java-plain',
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