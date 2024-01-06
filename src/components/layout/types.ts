import { mailToText } from "../types";
interface NavItem {
    label: string;
    link: string;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: "About",
        link: "#about",
    },
    {
        label: "Projects",
        link: "#projects",
    },
    {
        label: "Contact",
        link: mailToText,
    },
];

export const SOCIALS: Array<NavItem> = [
    {
        label: "Linkedin",
        link: "https://www.linkedin.com/in/shailesh-shenoy/",
    },
    {
        label: "Github",
        link: "https://github.com/shailesh-shenoy/wagerwinz",
    },
    {
        label: "Resume",
        link: "/resume",
    },
];

export type { NavItem };