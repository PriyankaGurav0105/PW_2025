import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.jpg";
// import cert1 from "../assets/certificate/cert-1.png"
import certdbms from "../assets/certificate/Cert-DBMS.png"
import certjava from "../assets/certificate/Cert-Java.png"
import certbd from "../assets/certificate/Cert-BD.png"
import certwd from "../assets/certificate/Cert-WD.png"

export const HERO_CONTENT = `Hi, I'm a passionate web developer excited to dive into the world of coding. I recently started my journey in web development, focusing on building responsive, user-friendly websites with modern technologies. I am proficient in HTML, CSS, JavaScript,React,Express, Node.js amd MongoDB and I am continuously learning new skills to stay up-to-date with industry trends. My goal is to create seamless, interactive user experiences and contribute to innovative projects. I enjoy tackling challenges and solving problems through clean, efficient code. Explore my portfolio to see the projects I’ve worked on!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully responsive e-commerce website built with the MERN stack, featuring product browsing, user authentication, shopping cart, and secure checkout. It offers an intuitive shopping experience, optimized for both desktop and mobile devices.",
    technologies: ["React","Tailwind", "Node.js", "MongoDB"],
    githubLink: 'https://github.com/PriyankaGurav0105/mern_e-commerce_website',
    liveLink: 'https://mern-e-commerce-website-frontend.onrender.com',
  },
  {
    title: "AI Powered Text to Image App",
    image: project2,
    description:
      "An AI-powered text-to-image app that generates high-quality images based on user input. Users can describe any scene or object, and the app uses advanced algorithms to create unique, relevant images in real-time.",
    technologies: ["React", "Tailwind", "ClipDrop AI API", "Node.js","Express","MongoDB","RazorPay"],
    githubLink: 'https://github.com/PriyankaGurav0105/AI_text_to_image_website',
    liveLink: '',
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing my web development projects. It features interactive project displays, detailed descriptions, and links to live demos and GitHub repositories, highlighting my skills and achievements.",
    technologies: ["HTML", "CSS", "React", "Tailwind","Framer Motions"],
    githubLink: 'https://github.com/PriyankaGurav0105/PW_2025',
    liveLink: 'https://portfolio-website-caap.onrender.com',
  },
  {
    title: "Crypto Currency Platform",
    image: project4,
    description:
      "A cryptocurrency platform that displays the top 10 currencies with real-time updates using an API. Users can easily view the latest prices and market trends for popular cryptocurrencies.",
    technologies: ["React", "CSS"],
    githubLink: 'https://github.com/PriyankaGurav0105/cryptoplace_2025',
    liveLink: 'https://cryptoplace-2025.onrender.com',
  },
  {
    title: "Food Recipe App",
    image: project4,
    description:
      "A food recipe app that fetches and displays a variety of recipes using an API. Users can explore recipes by ingredients, cuisine, or meal type, and get detailed instructions for",
    technologies: ["React", "Tailwind", "API"],
    githubLink: 'https://github.com/PriyankaGurav0105/food_recipe_website/tree/main/fr_website',
    liveLink: '',
  },
  {
    title: "Job Portal App",
    image: project5,
    description:
      "A app to find jobs and recruites can add job, manage jobs too.",
    technologies: ["React", "Tailwind", "Express","Nodejs", "Mongodb"],
    githubLink: 'https://github.com/PriyankaGurav0105/codsoft/JOB-PORTAL',
    liveLink: 'https://job-portal-client-kohl.vercel.app/',
    
  }
  
];

export const CONTACT = {
  address: "Bandra West Mumbai-50 ",
  phoneNo: "+12 4555 666 00 ",
  email: "priyankagurav1599@gmail.com",
};

export const CERTIFICATES = [
  {
    title: "Certification in Full Stack Web Development",
    description: "Certification in Full Stack Web Development from Udemy.",
    date: "2025",
    image:certwd,
  },
  {
    title: "Certification in Big Data Computing",
    description: "Certification in Big Data Computing from NPTEL.",
    date: "Aug-Oct 2024",
    image:certbd,
  },
  {
    title: "Certification in Data Base Management System",
    description: "Certification in Data Base Management System from NPTEL.",
    date: "Jan-Mar 2024",
    image:certdbms,
  },
  {
    title: "Certification in Java",
    description: "Certification in Java from NPTEL.",
    date: "Jul-Oct 2023",
    image:certjava,
  },
] 
