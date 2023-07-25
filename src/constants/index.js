import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ortekdigital,
  aholddelhaize,
  forneyshauling,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Development",
    icon: web,
  },
  {
    title: "Custom Web Application Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Responsive Web Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Public Offering",
    icon: ortekdigital,
    iconBg: "white",
    date: "December 2022 - Present",
    points: [
      "As the lead web developer at Ortek Digital, I created a seamless and interactive Drivers License Practice Exam app using HTML, CSS, and JavaScript. The user-friendly interface allowed individuals to take a multiple-choice practice exam with real-time feedback on their answers. The app dynamically guides users through the exam, providing a final score and percentage grade upon completion. It proved to be a valuable tool for aspiring drivers, helping them assess their knowledge and gain confidence for the actual license exam. Through the Drivers License Practice Exam app, Ortek Digital made a meaningful contribution, empowering individuals with a convenient and accessible way to prepare for their driving journey. The app's interactive features and comprehensive design ensured a practical and engaging learning experience, benefiting aspiring drivers in their pursuit of obtaining a driver's license.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Forney's Hauling",
    icon: forneyshauling,
    iconBg: "white",
    date: "November 2022 - Present",
    points: [
      "For my first client at Ortek Digital, I collaborated with Forney's Hauling Inc., a prominent construction hauling company, to develop their professional brochure website. Meticulously crafting custom content that showcases their services and achievements, I deployed and currently maintain the website, along with handling the domain and hosting. The result is www.forneyshauling.com, a visually appealing and user-friendly website that grants Forney's Hauling a strong online presence. Now, they can focus on their core operations while effectively reaching potential clients and partners through their new digital platform.",
    ],
  },
  {
    title: "Web Development Services",
    company_name: "Ortek Digital",
    icon: ortekdigital,
    iconBg: "white",
    date: "October 2022 - Current",
    points: [
      "I founded Ortek Digital to provide top-notch web development services to my local community. As a certified full-stack web developer, I'm dedicated to crafting custom web applications with responsive designs and seamless user experiences. My mission is to bridge the digital gap and empower businesses and individuals in our community with cutting-edge digital solutions.",
    ],
  },
  {
    title: "IT Help Desk Support",
    company_name: "Ahold Delhaize",
    icon: aholddelhaize,
    iconBg: "white",
    date: "Oct 2014 - Apr 2023",
    points: [
      "IT Help Desk Support Analyst responsible for providing comprehensive software, hardware, and network support for all technology in a retail/office environment for thousands of end users spread across 2000+ locations along the East Coast. Experienced in handling both internal and external support requests, and strive to deliver timely and effective solutions for all technical issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };