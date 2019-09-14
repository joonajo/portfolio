import { Languages } from "../portfolio/portfolio";

export interface IPortfolioItem {
    title: string
    language: Languages[]
    link: string
    githubLink: string
    description: string
    gif_src: string
    desktop: boolean
    mobile: boolean
}