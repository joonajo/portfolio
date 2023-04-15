export type PortfolioItem = {
  title: string;
  language: string[];
  link: string;
  githubLink: string;
  description: string;
  video_src: string;
  preview_src?: string;
  gif_src: string;
  desktop: boolean;
  mobile: boolean;
  order: number;
};
