import Hero_person from "../assets/Hero/person3.png";

import figma from "../assets/skills/figma.png";
import sketch from "../assets/skills/sketch.png";
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

import project1 from "../assets/Projects/img1.png";
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
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
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
      },
      {
        name: "Figma",
        para: "Experienced",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Experienced",
        logo: nodejs,
      },
      {
        name: "Redux",
        para: "Experienced",
        logo: redux,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Experienced",
        logo: python,
      },
      {
        name: "Ruby on Rails",
        para: "Experienced",
        logo: ror,
      },
      {
        name: "Web frontend",
        para: "Experienced",
        logo: htmlCssJs,
      },
      {
        name: "Tailwind, Sass, antD",
        para: "Experienced",
        logo: sassTailwind,
      },
      {
        name: "Sql, MySql, Postgresql, MongoDB",
        para: "Experienced",
        logo: backend,
      },
      {
        name: "GraphQL",
        para: "Intermediate",
        logo: graphql,
      },
      {
        name: "git and Github",
        para: "Experienced",
        logo: gitGithub,
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
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "UI/UX DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Teaching Programming",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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
    subtitle: "MY CLIENT REVIEWS",
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
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};