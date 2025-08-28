import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hassen Zouzou",
  initials: "HZ",
  url: "https://www.google.com/maps/place/Touggourt",
  location: "Touggourt, Algeria",
  locationLink: "https://www.google.com/maps/place/Touggourt",
  description: "Full-Stack Web Developer",
  summary:
    "I’m a web developer passionate about building products that make a real impact. At an EdTech startup, I’ve contributed by adding features and improvements that enhance the user experience. With a foundation in Next.js, Node.js, APIs, TypeScript, and AI tools, I’m steadily growing into a full-stack developer who enjoys turning ideas into functional applications. Beyond coding, I create educational content to share knowledge and support the developer community. I’m always open to new opportunities and collaborations where I can apply my skills, continue learning, and help build meaningful products.",
  avatarUrl: "/me.webp",
  skills: [
    // Programming languge
    "Python",
    "JavaScript",
    "TypeScript",

    // Frontend
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React js",
    "Next js",
    "Shadcn UI",

    // Backend
    "Node js",
    "Express js",
    "MySQL",
    "MongoDB",
    "Supabase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hassen.zouzou.bl@gmail.com",
    tel: "+213659007080",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hassenzouzou",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hassen-zouzou/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/hassen_zouzou?igsh=MXd0OW13MTQ0MTE1NA%3D%3D&utm_source=qr",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hassen.zouzou.bl@gmai.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Somu Raqami",
      href: "",
      badges: [],
      location: "Algeria",
      title: "Web Developer",
      logoUrl: "SomuRaqami.webp",
      start: "Jul 2024",
      end: "Present",
      description: `
      <ul>
        <li>Developed and maintained <strong>somuacademy.com</strong>, a key project of Somu Digital, enhancing performance, scalability, and code quality.</li>
        <li>Engineered the <strong>Personality Analysis page</strong>, boosting user engagement and interactivity on the platform.</li>
        <li>Implemented new features, fixed bugs, and conducted <strong>code reviews</strong> to ensure clean, maintainable, and high-quality code.</li>
        <li>Enhanced <strong>UI/UX</strong> by refining interfaces, resolving design issues, and improving overall user experience.</li>
        <li>Utilized <strong>Next.js, Node.js, TypeScript, and RESTful APIs</strong> for full-stack development and seamless frontend-backend integration.</li>
        <li>Collaborated within the development team as a <strong>frontend developer</strong>, learning best practices from senior members.</li>
        <li>Optimized website performance by writing <strong>efficient, well-structured code</strong>, improving load times and user satisfaction.</li>
      </ul>
      `,
    },
  ],
  education: [
    {
      school: "Badji Mokhtar - Annaba University",
      href: "",
      degree: "Bachlor's Degree, Computer Science",
      logoUrl: "/ubma.webp",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Brainwave",
      href: "https://brainwave-rouge.vercel.app/",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Brainwave is a frontend web interface built with React.js, featuring responsive design, animations, and reusable components. It showcases clean, organized code and practical skills in modern UI development, creating a polished, maintainable interface.",
      technologies: ["React js", "JavaScript", "Vite", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://brainwave-rouge.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hassenzouzou/BrainwaveChat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Brainwave.webp",
      video: "",
    },
    {
      title: "Flowing Marvel",
      href: "https://brainwave-rouge.vercel.app/",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Brainwave is a frontend web interface built with React.js, featuring responsive design, animations, and reusable components. It showcases clean, organized code and practical skills in modern UI development, creating a polished, maintainable interface.",
      technologies: ["React js", "TypeScript", "Vite", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://flowing-marvel.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hassenzouzou/flowing-marvel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flowingMarvel.webp",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },

  // ],
} as const;
