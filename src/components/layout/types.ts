import { mailToText } from "../types";
interface NavItem {
    label: string;
    link: string;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: "About",
        link: "/#about",
    },
    {
        label: "Projects",
        link: "/#projects",
    },
    {
        label: "Contact",
        link: "#contact",
    },
];

export const SOCIALS: Record<string, NavItem> = {
    "Github": {
        label: "Github",
        link: "https://github.com/shailesh-shenoy/",
    },
    "Linkedin": {
        label: "Linkedin",
        link: "https://www.linkedin.com/in/shailesh-shenoy/",
    },
    "Resume": {
        label: "Resume",
        link: "/Shailesh_Resume.pdf",
    },
};

export type { NavItem };