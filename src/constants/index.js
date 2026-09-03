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
    title: "Spotify Clone App",
    description: "A full-stack Spotify-inspired music streaming app with real-time chat, online user activity tracking, song/album browsing, playback controls, and an admin dashboard for content management.",
    imgPath: "/images/projects/spotify-cloned-app.png",
    techStack: ["React 18", "TypeScript", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.IO", "Clerk", "Cloudinary", "Zustand", "React Router DOM v6", "Tailwind CSS", "shadcn/ui", "Axios", "React Hot Toast"],
    githubUrl: "https://github.com/ngenemicheal/spotify-modified-app.git",
    liveUrl: "https://spotify-modified-app.onrender.com",
  },
  {
    title: "MERN Blog",
    description: "A full-stack MERN blog platform with JWT authentication, Google OAuth via Firebase, admin post CRUD with rich text editing and cover image uploads, searchable posts with categories and slugs, comments with likes, and a user/admin dashboard with dark mode.",
    imgPath: "/images/projects/mern-blog-app.png",
    techStack: ["React 18", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Redux Toolkit", "Redux Persist", "React Router DOM v6", "Tailwind CSS", "Flowbite React", "React Quill", "Firebase", "JWT", "bcryptjs", "moment"],
    githubUrl: "https://github.com/ngenemicheal/mern-blog.git",
    liveUrl: "https://mern-blog-test-2r4h.onrender.com",
  },
  {
    title: "Chat App",
    description: "A full-stack real-time chat application with authentication, protected routes, messaging, and online user presence updates.",
    imgPath: "/images/projects/chat-app.png",
    techStack: ["React", "Vite", "Express", "MongoDB", "Mongoose", "Node.js", "Socket.IO", "React Router", "Zustand", "Tailwind CSS", "DaisyUI", "React Hot Toast", "JWT", "Cookie Parser"],
    githubUrl: "https://github.com/ngenemicheal/chat-app-deployed.git",
    liveUrl: "https://chat-app-deployed.onrender.com",
  },
  {
    title: "Notes App",
    description: "A full-stack notes application for creating, viewing, updating, and deleting notes through a clean, responsive interface.",
    imgPath: "/images/projects/react-notes-app.png",
    techStack: ["React 19", "Vite", "React Router v7", "Axios", "Tailwind CSS", "DaisyUI", "Lucide React", "React Hot Toast", "Node.js", "Express.js", "MongoDB", "Mongoose", "CORS", "Upstash Redis"],
    githubUrl: "https://github.com/ngenemicheal/simple-react-notes-app.git",
    liveUrl: "https://simple-react-notes-app.onrender.com",
  },
  {
    title: "Library Management System",
    description: "A RESTful library management API for adding, viewing, borrowing, and returning books with documented endpoints.",
    imgPath: "/images/projects/library-management-app-backend.png",
    techStack: ["Node.js", "Express", "MongoDB", "Swagger"],
    githubUrl: "https://github.com/ngenemicheal/library-management-system.git",
    liveUrl: "https://library-management-system-ktid.onrender.com/api/books",
  },
  {
    title: "User Role Management System",
    description: "A full-stack RBAC application with four-tier user roles (student, teacher, admin, super-admin), JWT authentication, role-scoped user visibility, role editing, and super-admin-only user deletion via a Tailwind-styled React dashboard and Express/MongoDB backend.",
    imgPath: "/images/projects/user-role-management-app.png",
    techStack: ["React 18", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "React Router DOM v7", "Axios", "Tailwind CSS", "React Hot Toast", "JWT", "bcrypt"],
    githubUrl: "https://github.com/ngenemicheal/user-role-management-system.git",
    liveUrl: "https://user-role-management-system.onrender.com",
  },
  {
    title: "Notes App Backend",
    description: "A REST API backend for a notes application providing full CRUD for notes, CORS allowlisting for local and deployed clients, and global sliding-window rate limiting via Upstash Redis on top of Express 5 and MongoDB/Mongoose.",
    imgPath: "/images/projects/notes-app-backend.png",
    techStack: ["Node.js", "Express 5", "MongoDB", "Mongoose", "Upstash Redis", "@upstash/ratelimit", "CORS", "dotenv"],
    githubUrl: "https://github.com/ngenemicheal/notes-app-backend.git",
    liveUrl: "https://notes-app-backend-wbcq.onrender.com/api/notes/api/notes",
  }
];

const techStackImgs = [
  {
    name: "HTML5",
    category: "Frontend",
    imgPath: "/images/logos/html5.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    imgPath: "/images/logos/css3.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    imgPath: "/images/logos/javascript.svg",
  },
  {
    name: "React",
    category: "Frontend",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    imgPath: "/images/logos/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    imgPath: "/images/logos/typescript.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    imgPath: "/images/logos/next-js.svg",
  },
  {
    name: "React Native",
    category: "Frontend",
    imgPath: "/images/logos/react-native.svg",
  },
  {
    name: ".NET / ASP.NET Core",
    category: "Backend",
    imgPath: "/images/logos/dotnet.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Go",
    category: "Backend",
    imgPath: "/images/logos/go.svg",
  },
  {
    name: "Laravel",
    category: "Backend",
    imgPath: "/images/logos/laravel.svg",
  },
  {
    name: "Django",
    category: "Backend",
    imgPath: "/images/logos/django.svg",
  },
  {
    name: "Rust",
    category: "Backend",
    imgPath: "/images/logos/rust.svg",
  },
  {
    name: "Git & GitHub",
    category: "DevOps",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Docker",
    category: "DevOps",
    imgPath: "/images/logos/docker.svg",
  },
  {
    name: "AWS",
    category: "DevOps",
    imgPath: "/images/logos/aws.svg",
  },
  {
    name: "Linux",
    category: "DevOps",
    imgPath: "/images/logos/linux.svg",
  },
  {
    name: "CI/CD",
    category: "DevOps",
    imgPath: "/images/logos/ci-cd.svg",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    imgPath: "/images/logos/kubernetes.svg",
  },
  {
    name: "Terraform",
    category: "DevOps",
    imgPath: "/images/logos/terraform.svg",
  },
  {
    name: "Jenkins",
    category: "DevOps",
    imgPath: "/images/logos/jenkins.svg",
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    imgPath: "/images/logos/github-actions.svg",
  },
  {
    name: "Nginx",
    category: "DevOps",
    imgPath: "/images/logos/nginx.svg",
  },
  {
    name: "SQL Server",
    category: "Database",
    imgPath: "/images/logos/sql-server.svg",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    imgPath: "/images/logos/postgresql.svg",
  },
  {
    name: "MySQL",
    category: "Database",
    imgPath: "/images/logos/mysql.svg",
  },
  {
    name: "SQLite",
    category: "Database",
    imgPath: "/images/logos/sqlite.svg",
  },
  {
    name: "Redis",
    category: "Database",
    imgPath: "/images/logos/redis.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "Agile",
    category: "Practices",
    imgPath: "/images/logos/agile.svg",
  },
  {
    name: "API Development",
    category: "Practices",
    imgPath: "/images/logos/api-development.svg",
  },
  {
    name: "Monitoring & Logging",
    category: "Practices",
    imgPath: "/images/logos/monitoring-logging.svg",
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
  techStackImgs,
  projectCards,
  navLinks,
};
