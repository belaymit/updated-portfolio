import Hero_person from "../assets/Hero/person3.png";

import figma from "../assets/skills/figma.png";
import sketch from "../assets/skills/logo.svg";
import redux from "../assets/skills/redux.png";
import reactJs from "../assets/skills/react.png";
import nodejs from "../assets/skills/node.png";
import python from "../assets/skills/python.png";
import ror from '../assets/skills/ror.png'
import htmlCssJs from '../assets/skills/htmlcssjs.png'
import sassTailwind from '../assets/skills/tailwindcssVssass.png'
import backend from '../assets/skills/backend.png'
import graphql from '../assets/skills/graphql.png'
import gitGithub from '../assets/skills/git-and-github.png'

import services_logo1 from "../assets/services/logo1.png";
import services_logo2 from "../assets/services/logo2.png";
import services_logo3 from "../assets/services/logo3.png";

import project1 from "../assets/Projects/math-magician.jpg";
import spaceTraveler from "../assets/Projects/space_traveler.png";
import person_project from "../assets/Projects/person4.png";
import budgetApp from "../assets/Projects/budget-app_reduced.jpg";
import MovieApp from "../assets/Projects/MovieApp.png";
import bookStore from "../assets/Projects/bookStore.jpeg";
import carRental from "../assets/Projects/car_rental-app.jpg";



import Diego from '../assets/testimonials/Diego.jpeg'
import Glenda from '../assets/testimonials/Glenda.jpeg'
import Giovanni from '../assets/testimonials/Giovanni.jpeg'
import Ahad from '../assets/testimonials/Ahad.jpeg'
import Iqbal from '../assets/testimonials/Iqbal.jpeg'
import Birhanu from '../assets/testimonials/Birhanu.jpeg'

import Hireme_person from "../assets/Hireme/person2.png";
import Hireme_person2 from "../assets/Hireme/person1.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { SiCountingworkspro } from "react-icons/si";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "#experience",
      icon: SiCountingworkspro
    },
  ],
  hero: {
    title: "Full-stack Developer",
    firstName: "Belay Birhanu",
    LastName: "Gibina",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Full-stack Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Experienced",
        logo: reactJs,
        skillList:
              [
                `Demonstrated expertise in React development, utilizing its powerful features and libraries to build dynamic web applications`,
                `Extensive experience in developing robust and efficient applications using React's component-based architecture`,
                `Strong capabilities in frontend development, leveraging React to create visually appealing and interactive user interfaces.`,
                `Skilled in designing and implementing reusable and maintainable components, ensuring efficient code structure and development workflows.`,
                `Strong understanding of state management techniques and libraries such as Redux or React Context API, facilitating seamless data flow and application scalability.`,
                `Expertise in optimizing React applications for performance, employing techniques like code splitting, lazy loading, and performance profiling.`
              ],
      },
      {
        name: "Figma",
        para: "Experienced",
        logo: figma,
        skillList:
              [
                `I have a strong command of Figma as a design tool, utilizing its features, interface, and collaborative capabilities to create high-quality designs, wireframes, and prototypes`,
                `I have a solid understanding of UI and UX design principles, allowing me to craft visually appealing and user-friendly designs that prioritize usability, accessibility, and interactivity`,
                `I have the expertise to develop design systems and reusable components within Figma, ensuring consistency, efficiency, and scalability across projects by establishing design guidelines and organizing design assets`,
              ` I excel in using Figma's prototyping features to create interactive prototypes that showcase design interactions, animations, and transitions, resulting in enhanced user experiences`,
        ],
      },
      {
        name: "Node js",
        para: "Experienced",
        logo: nodejs,
        skillList:
        [
         `I am experienced in designing and implementing RESTful APIs using Node.js, Express.js, and other related frameworks. I can create robust APIs that communicate with databases, handle authentication, and provide data to client applications`,
        `I am skilled in building server-side applications using Node.js, including handling HTTP requests, implementing business logic, managing sessions, and integrating with databases and third-party services`,
        `I am proficient in utilizing asynchronous programming techniques in Node.js, such as callbacks, promises, and async/await, to handle concurrent operations and ensure optimal performance`,
        `I have experience working with databases like MongoDB, MySQL, or PostgreSQL, and can effectively integrate them into Node.js applications using libraries like Mongoose or Sequelize.`,
  ],
      },
      {
        name: "Redux",
        para: "Experienced",
        logo: redux,
        skillList:
        [
          `Experience in setting up and configuring Redux in a React application`,
          `Proficiency in creating Redux actions, reducers, and selectors`,
          `Understanding of Redux middleware and its implementation`,
          `Knowledge of handling asynchronous actions using Redux Thunk or Redux Saga`,
          `Ability to manage the application state using Redux store`,
          `Experience in handling complex state management scenarios using Redux`,
          `Understanding of Redux best practices and design patterns`,
          `Knowledge of combining Redux with React Router for handling navigation and routing`,
          `Familiarity with integrating Redux DevTools for debugging and monitoring state changes.`
       ],
      },
      {
        name: "TypeScript",
        para: "Experienced",
        logo: sketch,
        skillList:
        [
          `Proficiency in TypeScript, including strong typing and type inference`,
          `Experience in developing applications using TypeScript and leveraging its features`,
          `Knowledge of TypeScript syntax, language constructs, and best practices`,
          `Understanding of static typing and its benefits in catching errors during development`,
          `Familiarity with TypeScript's support for modern JavaScript features and ECMAScript standards`,
          `Ability to annotate and define types for variables, functions, and class members in TypeScript`,
          `Experience with TypeScript modules and module resolution strategies`,
          `Ability to leverage TypeScript's type system to improve code quality and maintainability`
        ],
      },
      {
        name: "Python",
        para: "Experienced",
        logo: python,
        skillList:
        [
          `React Proficiency`,
          `Extensive experience in developing robust and efficient 
            applications using React's component-based architecture`,
            `Strong capabilities in frontend development, 
      leveraging React to create visually appealing and interactive user interfaces.`,
      `Skilled in designing and implementing reusable and maintainable components,
       ensuring efficient code structure and development workflows.`,
        `Strong understanding of state management techniques and libraries such as
       Redux or React Context API, facilitating seamless data flow and application scalability.`,
        `Expertise in optimizing React applications for performance, employing techniques 
      like code splitting, lazy loading, and performance profiling.`
  ],
      },
      {
        name: "Ruby on Rails",
        para: "Experienced",
        logo: ror,
        skillList:
        [
          `Strong understanding of the Rails framework and its conventions`,
          `Experience in developing web applications using Ruby on Rails`,
          `Knowledge of MVC (Model-View-Controller) architecture`,
          `Familiarity with relational databases like MySQL or PostgreSQL`,
          `Understanding of RESTful APIs and their implementation in Rails`,
          `Understanding of testing frameworks like RSpec or MiniTest`,
          `Ability to write efficient and optimized Ruby code`,
          `Knowledge of deploying Rails applications to production environments`
        ],
      },
      {
        name: "Web Frontend",
        para: "Experienced",
        logo: htmlCssJs,
        skillList:
        [
            'Proficiency in HTML, CSS, and JavaScript',
            'Experience with front-end frameworks like React, Angular, or Vue.js',
            'Knowledge of responsive web design principles and techniques',
            'Familiarity with CSS preprocessors like Sass or LESS',
            'Ability to create and manipulate the DOM using JavaScript',
            'Understanding of web accessibility standards and best practices',
            'Experience with version control systems like Git',
            'Knowledge of UI/UX principles and ability to create intuitive user interfaces',
            'Familiarity with front-end build tools like Webpack or Gulp',
            'Understanding of cross-browser compatibility and performance optimization',
            'Ability to write clean, modular, and reusable code',
            'Understanding of web security principles and common vulnerabilities',
        ],
      },
      {
        name: "Tailwind, Sass, antD",
        para: "Experienced",
        logo: sassTailwind,
        skillList:
              [
              `Proficiency in using Tailwind CSS utility classes`,
              `Experience in building responsive and mobile-first web interfaces with Tailwind CSS`,
              `Proficiency in using Sass (Syntactically Awesome Style Sheets)`,
              `Experience in writing modular and maintainable CSS code with Sass`,
              `Knowledge of Sass extensions and libraries for advanced functionality`,
              `Proficiency in using Ant Design (antd) UI library`,
              `Understanding of antd grid system and responsive design`,
              `Experience in building user interfaces with antd components and layouts`,
              `Ability to create custom utility classes and extend Tailwind CSS with plugins`,
              `Familiarity with the utility classes for layout, typography, spacing, and colors in Tailwind`,
        ],
      },
      {
        name: "Sql, MySql, Postgresql, MongoDB",
        para: "Experienced",
        logo: backend,
        skillList:
        [
          `Proficiency in SQL (Structured Query Language)`,
          `Experience in writing complex SQL queries for data retrieval and manipulation`,
          `Proficiency in MySQL database management system`,
          `Experience in designing and managing MySQL databases`,
          `Proficiency in PostgreSQL database management system`,
          `Experience in designing and managing PostgreSQL databases`,
          `Proficiency in MongoDB NoSQL database`,
          `Ability to perform CRUD operations (Create, Read, Update, Delete) in MongoDB`,
          `Ability to create and manage database tables, views, and sequences`,
        ],
      },
      {
        name: "GraphQL",
        para: "Intermediate",
        logo: graphql,
        skillList:
        [
          `Proficiency in GraphQL query language and schema definition`,
          `Experience in building GraphQL APIs and integrating them with front-end applications`,
          `Knowledge of GraphQL resolvers, mutations, and subscriptions`,
          `Understanding of GraphQL schema stitching and schema composition`,
          `Familiarity with GraphQL tooling and libraries like Apollo Client or Relay`,
          `Ability to design efficient and optimized GraphQL schemas and queries`,
          `Experience with GraphQL server implementations like Apollo Server or GraphQL Yoga`,
          `Knowledge of GraphQL best practices and performance optimization techniques`,
      ],
      },
      {
        name: "git and Github",
        para: "Experienced",
        logo: gitGithub,
        skillList:
              [
              `Proficiency in using Git for version control`,
              'Experience with Git workflows such as Gitflow or feature branching',
              'Knowledge of branching, merging, and resolving conflicts in Git',
              'Familiarity with GitHub and understanding of its features',
              'Ability to collaborate with others using GitHub for code sharing and reviewing',
              'Understanding of pull requests, code reviews, and issue tracking in GitHub',
              'Knowledge of Git commands and their usage (e.g., commit, push, pull, clone)',
              'Experience with Git hosting services like Bitbucket or GitLab',
              'Understanding of Git best practices and conventions',
        ],
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Software Development",
        para: ` I provide comprehensive software development services tailored to meet your unique business requirements. 
        From conceptualization to deployment, our team of skilled developers ensures the delivery of robust, scalable, 
        and user-friendly solutions that drive efficiency and accelerate your digital transformation.`,
        logo: services_logo1
      },
      {
        title: "UI/UX DESIGNING",
        para: `I have experience in UI/UX design services that focus on creating intuitive and visually appealing user interfaces. 
        Our team combines creativity, user-centric design principles, and industry best practices to deliver engaging and seamless user experiences that enhance customer satisfaction and drive business growth.`,
        logo: services_logo2,
      },
      {
        title: "Providing Web Development Courses",
        para: `I offer engaging and informative courses that empower students to master the art of building websites and web applications.
                 My teaching approach focuses on practical skills, problem-solving, and fostering a deep understanding of web development concepts.
                  I strive to create a supportive and interactive learning environment where students can unleash their creativity and become confident web developers.`,
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Math Magician",
        image: project1,
        ViewSource: 'https://github.com/belaymit/math-magicians',
        liveDemo: 'https://my-math-magician.onrender.com/'
      },
      {
        title: "Book Store CMS",
        image: bookStore,
        ViewSource: 'https://github.com/belaymit/bookstore-react-redux',
        liveDemo: 'https://bookstore-react-redux.onrender.com/'
      },
      {
        title: "Space Travelers' Hub",
        image: spaceTraveler,
        ViewSource: 'https://github.com/belaymit/space-x-react-redux',
        liveDemo: 'https://space-traveler-app-react-redux.onrender.com/'
      },
      
      {
        title: "Budget App RoR",
        image: budgetApp,
        ViewSource: 'https://github.com/belaymit/budget-app-ror',
        liveDemo: 'https://belaymit.github.io/Capstone-module-2/dist/'
      },
      {
        title: "Movie App",
        image: MovieApp,
        ViewSource: 'https://github.com/belaymit/Capstone-module-2',
        liveDemo: 'https://budgte-app.onrender.com/'
      },
      {
        title: "Car Rental App",
        image: carRental,
        ViewSource: 'https://github.com/belaymit/car_app_frontend',
        liveDemo: 'https://carappcapstone.netlify.app/'
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CO-WORKERS REVIEWS",
    testimonials_content: [
      {
        review:
          `“I had the pleasure of studying alongside Belay in several courses at Microverse, an online tech code academy, 
          and I must say that he is one of the most professional and knowledgeable developers I have met. Belay has a strong understanding of various coding languages such as Ruby, React, JavaScript, CSS, and HTML. 
          His dedication to his work is evident through his consistent hard work and willingness to help his classmates in any way he can. 
          I am impressed with his ability to find solutions to complex problems quickly and efficiently. Belay is an asset to any team and I highly recommend him to any employer looking for a dedicated, professional, and skilled developer.”`,
        img: Diego,
        name: "Diego Cuenca Morocho",
      },
      {
        review:
          `“Having the opportunity to work together on coding projects with Belay has been a great experience. Belay's positive attitude makes work more enjoyable. Any company would be lucky to have him as a team member.”`,
        img: Giovanni,
        name: "Giovanni Juliao",
      },
      {
        review:
          `“It is my pleasure to recommend Mr. Belay Birhanu who worked with me at microverse as a full-stack developer.
           He is a very determined, well-qualified and intelligent individual. 
           He is passionate about writing codes and solving different problems through 
           the development of creative and innovative software. 
          He is also a delight to work with a team player with a positive attitude and 
          interpersonal relationship all the way. I wouldn’t hesitate to work with him again if the opportunity arose.”`,
        img: Birhanu,
        name: "Birhanu Gudisa T",
      },
      {
        review:
          `“Belay is exactly the sort of developer any company would love. He has brilliant communication skills. 
          I worked alongside him while building 2 different projects and he was always positive and open to learning from others. He was great at remote teamwork, and pair programming and has a keen eye for design. He is also super friendly and respectful so when we worked together, I felt like we'd known each other for years. I can't recommend him enough!”`,
        img: Iqbal,
        name: "Iqbal Elham",
      },
      {
        review:
          `“It was a wonderful experience to collaborate with Belay Birhanu on various projects at the Microverse program. He is a highly competent developer who uses effective problem-solving techniques. 
          I would like to express my appreciation for his coding expertise, time management skills, and professionalism. I firmly believe he would be a valuable member of any team undertaking. 
          If the chance arose, I wouldn't think twice about working with him again”`,
        img: Ahad,
        name: "Abdul Ahad Bhatti",
      },
      {
        review:
          `“Belay was my coding partner during the Microverse Program, and his skills and knowledge were unparalleled. 
          Along with that, he brought energy and dependability that made him crucial to our project.
          He showed broad knowledge in Jest and save our team time, by finding the simplest solution, 
          he was never late for a meeting, and he was always ready to solve any issue that will come our way, I wish him the best in all he does and I know that any position he wishes to undertake he will doubtlessly be a star in it.”`,
        img: Glenda,
        name: "Glenda Diaz",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para:  `I bring extensive experience in React, Redux, and Ruby on Rails development to the table. 
          With React, I have a deep understanding of building dynamic and interactive user interfaces using reusable components, 
          managing state with Redux for scalable and maintainable applications, and leveraging React Router for efficient navigation. 
          In addition, my expertise in Ruby on Rails allows me to rapidly develop robust and secure web applications, following the 
          MVC architectural pattern and utilizing the conventions of Rails for streamlined development. I have a strong track record of 
          successfully delivering projects using these technologies, and my ability to collaborate effectively with cross-functional teams ensures smooth project execution. 
          By hiring me, you can benefit from my proficiency in these frameworks and my commitment to delivering high-quality, efficient, and user-friendly web applications`,
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "2belamit@gmail.com",
        icon: GrMail,
        link: "mailto:2belamit@gmail.com",
      },
      {
        text: "(+251) 92 164 0816",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/belay-bgwa/",
      },
      {
        text: "GitHub",
        icon: BsGithub,
        link: "https://github.com/belaymit",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },

};