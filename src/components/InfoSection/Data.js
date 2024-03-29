export const homeObjOne = {
  id:'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Me',
  headline: 'Full-Stack Software Developer with a background in Sound for Film and TV',
  description: `Experienced Sound Designer that pivoted into a career in Software Engineering. I bring across a slew of technical skills and an ability to quickly learn new tech tools and processes. I am excited about the opportunity to bring my time management and people skills into the dev industry and to work on projects in the not for profit and government spaces.`,
  buttonLabel: 'More About Me',
  buttonTo: 'contact',
  imgStart: false,
  // img: require('../../images/team.svg').default,
  img: require('../../images/team.svg').default,
  alt: 'team',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id:'skills',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Skills',
  headline: "Currently working with:",
  description: `JavaScript, Node.js, React, Nextjs, Express.js, PostgreSQL, Boomi, Groovy, Sass.`,
  buttonLabel: 'Contact Me',
  buttonTo: 'contact',
  imgStart: true,
  img: require('../../images/skills.svg').default,
  alt: 'person',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id:'work',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Work',
  headline: 'I can type at 170 WPM',
  description: 'In English and Spanish',
  buttonLabel: 'Contact Me',
  buttonTo: 'contact',
  imgStart: false,
  img: require('../../images/me.svg').default,
  alt: 'person',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjFour = {
  id:'resume',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Resume',
  headline: "Did I mention I've won awards?",
  description: "It's only best Sound Editor for a short-film, but still counts right?!",
  buttonLabel: 'Resume',
  resume: true,
  href: 'https://storage.googleapis.com/adan-moses-personal-website/adan_moses_resume.pdf',
  imgStart: false,
  img: require('../../images/me.svg').default,
  alt: 'person',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFive = {
  id:'contact',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Contact Me',
  headline: 'Want to get in touch?',
  description: 'If you would like to know more about me or just get in touch with me, please feel free to add me on LinkedIn, you can find a link to to on the footer of this page.',
  buttonLabel: 'Contact Me',
  buttonTo: 'contact',
  imgStart: true,
  img: require('../../images/mail.svg').default,
  alt: 'person',
  dark: true,
  primary: true,
  darkText: false,
  // contactForm: true,
  noButton: true,
};