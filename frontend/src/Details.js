
// This file is used to store all the details of the user
import logolight from "./assets/logolight.png"
import logodark from "./assets/logodark.png"
// Profile Image
import profile from "./assets/profile.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logoDark  : logodark,
  logoLight :logolight,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Shinkhal Sinha",
  tagline: "I build things for web",
  img: profile,
  about: `I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/shinkhal-sinha/",
  github: "https://github.com/Shinkhal",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Graphic Designer",
    Company: `Labdox`,
    Location: "Work from home",
    Type: "Internship",
    Duration: "MAY 2024 - JUNE 2024",
  },
  {
    Position: "Content Calendar Designer",
    Company: `Ozibook`,
    Location: "Work from home",
    Type: "Internship",
    Duration: "JUNE 2024 - JULY 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Course: "Bachelor of Technology (B.Tech)",
    Branch: "Computer Science and Engineering",
    Institute: "LoveLy Professional University",
    Location: "Phagwara,Punjab",
    Duration: "2022 - 2026",
  },
  {
    Course: "Senior Secondary Education",
    Branch:"CBSE",
    Institute: "Secondary Delhi Public School",
    Location: "Gaya,Bihar",
    Duration: "2020- 2022"
  },
  {
    Course: "Secondary Education",
    Branch:"CBSE",
    Institute: "Nazareth Academy",
    Location: "Gaya,Bihar",
    Duration: "2020"
  }
];

export const skills = [
  { id: "HTML5_skill", content: "HTML5", percentage: 80 },
  { id: "CSS3_skill", content: "CSS3", percentage: 75 },
  { id: "JavaScript_skill", content: "JavaScript", percentage: 90 },
  { id: "ReactJS_skill", content: "ReactJS", percentage: 80 },
  { id: "Redux_skill", content: "Redux", percentage: 70 },
  { id: "TailwindCSS_skill", content: "Tailwind CSS", percentage: 65 },
  { id: "Bootstrap_skill", content: "Bootstrap", percentage: 80 },
  { id: "SASS_skill", content: "SASS", percentage: 75 },
  { id: "NodeJS_skill", content: "Node.js", percentage: 85 },
  { id: "ExpressJS_skill", content: "Express.js", percentage: 80 },
  { id: "Angular_skill", content: "Angular", percentage: 70 },
  { id: "jQuery_skill", content: "jQuery", percentage: 75 },
  { id: "DSA_skill", content: "DSA", percentage: 90 },
  { id: "MongoDB_skill", content: "MongoDB", percentage: 85 },
  { id: "MySQL_skill", content: "MySQL", percentage: 80 },
  { id: "C_skill", content: "C", percentage: 85 },
  { id: "Cpp_skill", content: "C++", percentage: 80 },
  { id: "Java_skill", content: "Java", percentage: 75 },
  { id: "Python_skill", content: "Python", percentage: 90 },
];

export const certifications = [
  { id: 1, title: "React Basics -  Meta", link: "https://coursera.org/share/01084822bc72f8fd52723b8b0b818469" },
  { id: 2, title: "The Full Stack - Meta", link: "https://coursera.org/share/d7747531acf11717b7a35132d4e9af86" },
  { id:3, title:"Server side JavaScript with Node.js",link:"https://coursera.org/share/eb652d49afd4a62c888e2948d539ba86"},
  { id:4,title:"Programming in C++",link:"https://coursera.org/share/2b141ebe967096edadf49b465324e171"},
  { id:5, title:"Python Basics - HackerRank", link:"https://www.hackerrank.com/certificates/a6ff7f090c6e"},
  { id:6, title:"Dynamic Programming,Greedy Algorithm", link:"https://coursera.org/share/3133e5feef011f808a1c5ed0ffe46555"},
  { id:7, title:"Approximation Algorithms and Linear Programming", link:"https://coursera.org/share/790380c56167ca775372199ae5e265bd"},
  { id:8, title:"Generative AI with Large Language Models", link:"https://coursera.org/share/3623ad857b20e3fa98a442285a4fecae"},
  { id:9, title:"Prompt Engineering for ChatGPT", link:"https://coursera.org/share/b49db0f9515db30c879a1541658d7ae8"}
  // Add more certifications
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Protfolio",
    image: projectImage1,
    description: `Discover my portfolio—an interactive showcase of projects, skills, and contact information. Explore live project previews and GitHub repositories to see my work in action.`,
    techstack: "React.js, Node.js, Tailwind css",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Resturant Table Booking",
    image: projectImage2,
    description: `Created a streamlined Restaurant Table Booking Website for convenient
reservation management and other services of resturant with proper validation and authentication.`,
    techstack: "MERN Stack",
    previewLink: "https://feista-flavours.netlify.app/",
    githubLink: "https://github.com",
  },
  {
    title: "Resturant Frontend",
    image: projectImage3,
    description: `Project for Meta Capstone where Developed an intuitive Frontend website for Food Ordering Website for seamless online meal selection and ordering food and delivery.`,
    techstack: "React.js",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "UMS Website",
    image: projectImage4,
    description: `Crafted a user-friendly University Management System website.A comprehensive university student portal to view teacher messages, academic updates, timetable, fees, assignments, attendance,
 and more for streamlined academic management.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Logos And Posters",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "Adobe Photoshop, Canva, Illustrator, InDesign, Lightroom",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "MCU Illustrations",
    image: projectImage6,
    description: `Created some illustration designs based on the characters of the marvel cinematic Universe (MCU) `,
    techstack: "Adobe Photoshop,Illustrator",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

