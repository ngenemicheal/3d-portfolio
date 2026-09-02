const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Clients Satisfication" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const projectCards = [
  {
    title: "Ryde",
    description:
      "A ride-booking experience focused on smooth trip discovery, location-aware flows, and a fast mobile-first interface.",
    imgPath: "/images/project1.png",
    techStack: ["React Native", "Expo", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "University Library Management Platform",
    description:
      "A production-grade library platform for browsing, borrowing, and managing books with admin-friendly workflows.",
    imgPath: "/images/project2.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/adrianhajdin/university-library-jsm",
    liveUrl: "https://university-library-jsm.vercel.app",
  },
  {
    title: "YC Directory",
    description:
      "A startup discovery platform where founders can publish, browse, and explore pitches with a clean modern UX.",
    imgPath: "/images/project3.png",
    techStack: ["Next.js 15", "React 19", "Sanity", "TypeScript"],
    githubUrl: "https://github.com/adrianhajdin/yc_directory",
    liveUrl: "https://yc-directory.vercel.app",
  },
  {
    title: "Ryde",
    description:
      "A ride-booking experience focused on smooth trip discovery, location-aware flows, and a fast mobile-first interface.",
    imgPath: "/images/project1.png",
    techStack: ["React Native", "Expo", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "University Library Management Platform",
    description:
      "A production-grade library platform for browsing, borrowing, and managing books with admin-friendly workflows.",
    imgPath: "/images/project2.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/adrianhajdin/university-library-jsm",
    liveUrl: "https://university-library-jsm.vercel.app",
  },
  {
    title: "YC Directory",
    description:
      "A startup discovery platform where founders can publish, browse, and explore pitches with a clean modern UX.",
    imgPath: "/images/project3.png",
    techStack: ["Next.js 15", "React 19", "Sanity", "TypeScript"],
    githubUrl: "https://github.com/adrianhajdin/yc_directory",
    liveUrl: "https://yc-directory.vercel.app",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Software Engineer Intern",
    company: "Leadway",
    date: "06/2026 - Present",
    location: "Apapa, Lagos",
    summary:
      "Software Engineering Intern at Leadway Assurance with hands-on experience developing technical skills in C#/.NET and DevOps practices. Currently building proficiency in software development, application development, version control, deployment processes, and DevOps practices. Demonstrates strong problem-solving abilities, willingness to learn, and an interest in building scalable and reliable software solutions. Seeking opportunities to apply and further develop technical skills in a professional software engineering environment.",
    responsibilities: [
      "Developed and maintained software applications using C#/.NET, following best practices and industry standards.",
      "Implemented version control systems (Git) to manage codebases and collaborate with other developers.",
      "Managed deployment processes, ensuring smooth and secure application delivery.",
      "Provided technical support and guidance to other developers, resolving issues and providing feedback on code quality.",
      "Participated in code reviews and pair programming sessions to improve code quality and share knowledge.",
    ],
  },
  {
    title: "Backend Developer",
    company: "TeKrypt",
    date: "07/2022 - 09/2023",
    location: "Remote",
    summary:
      "Built various backends for frontend and mobile applications. Primarily used Laravel while also creating a few APIs with Node and Next.js.",
    responsibilities: [
      "Developed a backend in Laravel for a football club's Next.js website to manage team details, ticketing, and match schedules.",
      "Integrated API Sports and Paystack for real-time data fetching and secure payment processing.",
      "Implemented database design and optimization strategies to ensure efficient data retrieval and storage.",
      "Collaborated with cross-functional teams to ensure smooth integration of backend components with frontend applications.",
    ],
  },
  {
    title: "Full Stack Engineer (Freelance)",
    company: "Independent",
    date: "2018 - Present",
    location: "Remote",
    summary:
      "After completing my internship, I started developing websites, software, and even mobile applications of various scales.",
    responsibilities: [
      "Music Player App (React-Native) for a Computer Science Final Year Student.",
      "Portfolio Website (Laravel) for a Graphics Designer.",
      "Small Scale Ecommerce Website (Laravel) for a Food Seller.",
    ],
  },
  {
    title: "Intern - Web Developer",
    company: "TEMF",
    date: "05/2017 - 02/2018",
    location: "Remote",
    summary:
      "Worked on legacy PHP systems, performance optimization, and cross-team feature delivery.",
    responsibilities: [
      "Maintained and enhanced legacy PHP software, ensuring functionality and security improvements.",
      "Managed website performance and troubleshooting issues, improving page load speeds by optimizing PHP code and database queries.",
      "Worked closely with senior developers to resolve bugs and deploy feature updates.",
    ],
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ngene.micheal",
  },
  // {
  //   name: "Facebook",
  //   imgPath: "/images/fb.png",
  //   url: "",
  // },
  {
    name: "X",
    imgPath: "/images/x.png",
    url: "https://x.com/techie__mike",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/micheal-ngene",
  },
  {
    name: "WhatsApp",
    imgPath: "/images/wa.png",
    url: "https://wa.me/2348139194282",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  projectCards,
  navLinks,
};
