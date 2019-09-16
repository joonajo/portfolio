import { IPortfolioItem } from "../interfaces/interfaces"

export enum Languages {
    React = 'React',
    TypeScript = 'TypeScript',
    JavaScript = 'JavaScript',
    Cpp = 'C++',
}
  
export const items = {
    NasaHub: { 
        title: 'Nasa Hub',
        language: [Languages.React, Languages.TypeScript],
        link: 'https://nnasahub.web.app',
        githubLink: 'https://github.com/joonajo/Nasa-Hub',
        description: 'Built with React + TypeScript + Redux. Utilizes open NASA APIs. Check out the Astronomy Picture of the Day (APOD), latest Mars rover images as well as Earth from the space with the EPIC API.',
        gif_src: 'https://thumbs.gfycat.com/ShamefulPopularFieldmouse.webp',
        desktop: true,
        mobile: true,
    },
    WeatherApp: {
        title: 'Weather App',
        language: [Languages.React, Languages.TypeScript],
        link: 'https://weatherr.web.app',
        githubLink: 'https://github.com/joonajo/Weather-app',
        description: 'Built with React + TypeScript + Redux. Utilizes three different APIs (OpenWeatherMap, TimezoneDB & Geonames) to seamlessly check the weather all over the world, with timezones adjusted accordingly.',
        gif_src: 'https://thumbs.gfycat.com/FantasticDismalAsianporcupine.webp',
        desktop: true,
        mobile: true,
    },
    BurgerBuilder: {
        title: 'Burger Builder',
        language: [Languages.React, Languages.JavaScript],
        link: 'https://react-burgerapp-d2ef8.web.app',
        githubLink: 'https://github.com/joonajo/Burger-Builder',
        description: 'Built with ReactJS + Redux. Utilizes Firebase account authorization and realtime database. Build your own burger and order it!',
        gif_src: 'https://thumbs.gfycat.com/AchingAlienatedAsp.webp',
        desktop: true,
        mobile: true,
    },
    TodoList: {
        title: 'To-Do List',
        language: [Languages.React, Languages.TypeScript],
        link: 'https://todo-reactts.web.app',
        githubLink: 'https://github.com/joonajo/Todo-ReactTS',
        description: 'Built with React + TypeScript. Utilizes Firebase Cloud database (Firestore) and account authorization. Make a todo-list, check/remove items, and keep it saved in the database!',
        gif_src: 'https://thumbs.gfycat.com/CreamyTheseBeagle.webp',
        desktop: true,
        mobile: true,
    },
    CannonGame: {
        title: 'Cannon Game',
        language: [Languages.Cpp],
        link: 'https://www.youtube.com/watch?v=6rbhqyCm97E',
        githubLink: 'https://github.com/joonajo/CannonGame',
        description: 'Built purely with C++ and the SFML graphics library. A simple Cannon Game against a basic AI.',
        gif_src: 'https://media.giphy.com/media/ftB8xRdaDJHzk2v6Ur/giphy.gif',
        desktop: true,
        mobile: false,
    }
}
  
// makes it easy to switch up the order if needed
export const portfolioItems: IPortfolioItem[] = [
    items.NasaHub,
    items.WeatherApp,
    items.TodoList,
    items.BurgerBuilder,
    items.CannonGame
]