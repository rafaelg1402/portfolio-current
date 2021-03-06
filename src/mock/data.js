import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rafael Gomes | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Rafael Gomes',
  subtitle: 'Your favourite Front-end developer',
  cta: "Let's talk",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'I live surrounded by three canaries (my pets; Lema, Homem-Aranha and Naka). I enjoy sports, gaming and messing around with Raspberry PIs. Can you tell I struggle with talking about myself?',
  paragraphTwo:
    "One thing I won't struggle with is finding the motivation needed to develop my skills even further. I love many aspects of programming and enjoy learning new technologies.",
  paragraphThree: 'I will let my resume speak for my professional skills',
  resume: 'https://rafaelg1402.github.io/portfolio/resources/Rafael%20Gomes%20CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'booksbeyondni.png',
    title: 'Books Beyond NI',
    info:
      'This project was built in collaboration with Ulster University. It was a 7 page website to do with writing in Northern Ireland and about diversity',
    info2: 'Tools used - WordPress, Elementor, HTML, CSS, API, A11y',
    url: 'https://booksbeyondni.com/',
  },
  {
    id: nanoid(),
    img: 'pokedex-app.png',
    title: 'Pokedex app',
    info:
      'This was a project that I built after finishing the Scrimba bootcamp. I used PokeAPI to fetch data and the React framework. This was a project that I researched and made sure that accessibility was at the forefront.',
    info2: 'Tools used - HTML, CSS, JS, ReactJS, Nextjs, React hooks, API, A11y',
    url: 'https://rafas-pokedex.netlify.app/',
    repo: 'https://github.com/rafaelg1402/react-pokemon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movie-app.png',
    title: 'Movie API app',
    info:
      'This was a project that I built as I wanted to learn how to use server-side rendering and generate a static website while using React. I settled on Next.js and I used MovieDB API to fetch data.',
    info2: 'Tools used - HTML, CSS, JS, React, React Hooks, API & Fetch, NextJS, Vercel (hosting)',
    url: 'https://movieapp-njs.vercel.app/',
    repo: 'https://github.com/rafaelg1402/nextjs-movie-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'games-list.png',
    title: 'Games List app',
    info:
      'I decided to create this so I could see if what I had learned with React, Hooks and useEffect could be used all together. I decided to create a JSON file which contained all the games in an object, This helped with understanding how API calls work and how JSON files work.',
    info2: 'Tools used - HTML, CSS, JS, React, React Hooks, API & Fetch, Netlify (hosting)',
    url: 'https://react-games-list.netlify.app/',
    repo: 'https://github.com/rafaelg1402/react-game-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snake-clone.png',
    title: 'Snake clone app',
    info:
      'A snake clone used to develop and show off my JS skills. This was also very helpful in learning more about CSS as I tried to replicate how Snake would have looked like in the old Nokia phones.',
    info2: 'Tools used - HTML, CSS, JS, OOP, Dom manipulation, Surge (hosting)',
    url: 'https://my-snake-game.surge.sh/',
    repo: 'https://github.com/rafaelg1402/snake-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: "Let's Talk",
  email: 'rafaelg1402@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Rafaelg14021',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rafael-gomes-1402/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rafaelg1402',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
