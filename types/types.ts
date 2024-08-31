export type PortfolioItem = {
  description: string;
  desktop: boolean;
  gif_src: string;
  githubLink: string;
  language: string[];
  link: string;
  mobile: boolean;
  order: number;
  preview_src?: string;
  title: string;
  video_src: string;
};

export type GetPortfolioItemsResponse = {
  [key: string]: PortfolioItem;
};
