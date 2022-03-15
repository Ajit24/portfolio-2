/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Ajit Kumar Pandey",
  logo_name: "Ajit Kumar Pandey",
  // nickname: "harry / picleric",
  full_name: "Ajit Kumar Pandey",
  subTitle: "Full Stack Developer, Open Source Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/180_jwLKc801HTfXuAWh1AkxOpYQ7WaEI/view?usp=sharing",
  mail: "ajitpandey917@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Ajit24",
  linkedin: "https://www.linkedin.com/in/ajit-kr-pandey/",
  gmail: "ajitpandey917@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/Aashu.Baghel11",
  twitter: "#",
  instagram: "#",
};

const skills = {
  data: [
    {
      title: "Front End skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS,Tailwindcss",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Backened Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Backened platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
        "⚡ Creating application backend in Node, Express,MongoDB,Postman",
        "⚡ Integration of third party services such as Google",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects,HTMl,CSS,Javascript and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.JPG",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@ajitpandey917",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "KOOVS.com",
      url:
        "https://github.com/Ajit24/KOOVS_Clone",
      
      
      description:
        "Basically I have built the E-Commerce Website using pure HTML ,CSS and JavaScript. I have created the clone of the KOOVS.com ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        
      ],
    },
    {
      id: "1",
      name: "PAULA'S CHOICE",
      url:
        "https://github.com/Ajit24/PAULA-S-CHOICE-WEB-PAGE",
      
      
      description:
        "I have built the E-Commerce Website using pure HTML ,CSS and Adv.JavaScript. I have created the clone of the PAULA'S CHOICE  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        
      ],
    },
    {
      id: "2",
      name: "PAULA'S CHOICE",
      url: "https://github.com/Ajit24/paula_s_choice-backend",
      description:
        " I have built the E-Commerce Website using pure backend with ejs-express, mongodb-database, node-js, express-js. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Express",
          iconifyClass: "logos-express",
        },
        {
          name: "ejs",
          iconifyClass: "simple-icons:ejs",
        },
        
      ],
    },
    // {
    //   id: "3",
    //   name: "Netlify",
    //   url: "https://github.com/Ajit24/PAULA-S-CHOICE-WEB-PAGE",
    //   description:
    //     "I have built the E-Commerce Website using pure HTML ,CSS and Adv.JavaScript. I have created the clone of the Netlify",
    //   languages: [
    //     {
    //       name: "React",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //     {
    //       name: "Express",
    //       iconifyClass: "logos-express",
    //     },
        
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
  projects,
};
