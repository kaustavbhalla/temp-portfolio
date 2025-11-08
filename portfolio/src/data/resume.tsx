import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kaustav Bhalla",
  initials: "KB",
  url: "http://localhost:3000",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi/@28.6440837,77.0932314,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Software Engineer, based out of Delhi. \n Love engineering solutions to complex problems, enjoy building and orchestrating end-to-end solutions.",
  summary:
    "Based out of Delhi, India. [I'm currently pursuing a degree in computer science and engineering](/#education), building [TalentLoop](), and [competed in hackathons for fun](/#hackathons). I'm a fullstack engineer with specializations in AI-ML based solutions.",
  avatarUrl: "/me2.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "Postgres",
    "C++",
    "C",
    "NumPy",
    "Pandas",
    "TailwindCSS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailto:kaustavbhalla15@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kaustavbhalla",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kaustav-bhalla-941041220/?originalSubdomain=in",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kaustav_bhalla",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@KaustavBhalla",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kaustavbhalla15@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
      {
    company: "GGSIPU USS ACM Student Chapter",
    href: "",
    badges: ["Part-time"],
    location: "Dwarka, Delhi, India",
    title: "Software Engineer",
    logoUrl: "/acm.png",
    start: "Sep 2025",
    end: "Present",
    description:
      "Web Developer for USS ACM Student Chapter at USICT GGSIPU. Worked on Node.js and Next.js-based projects to enhance the chapter’s digital presence."
  },
  {
    company: "Occasions",
    href: "",
    badges: ["Self-employed"],
    location: "Delhi, India · Hybrid",
    title: "Founding Member",
    logoUrl: "/occasions.png",
    start: "Aug 2025",
    end: "Present",
    description:
      "Co-founded Occasions, a hybrid startup focusing on creative event and experience solutions. Contributed to the early planning, strategy, and design processes."
  },
  {
    company: "Vibe AI",
    href: "",
    badges: ["Internship"],
    location: "Delhi, India · Remote",
    title: "Founding Tester",
    logoUrl: "/vibeai.jpeg",
    start: "Sep 2025",
    end: "Oct 2025",
    description:
      "Worked as a founding tester for Vibe AI, providing feedback and feature testing for AI-driven user experience improvements during early product stages."
  },
  {
    company: "GirlScript Summer of Code",
    href: "",
    badges: ["Part-time"],
    location: "Delhi, India · Remote",
    title: "Open Source Developer",
    logoUrl: "/gssoc.png",
    start: "Jul 2025",
    end: "Oct 2025",
    description:
      "Selected as a contributor for open-source projects under GirlScript Summer of Code. Worked on collaborative development, version control, and GitHub-based workflows."
  },
  {
    company: "Montfort MUN",
    href: "",
    badges: ["Hybrid"],
    location: "Delhi, India",
    title: "USG Tech",
    logoUrl: "/mun.jpeg",
    start: "Sep 2023",
    end: "Nov 2023",
    description:
      "Served as USG Tech for the Montfort Model United Nations 2023. Provided technology solutions for the team, including tech support, marketing design, and event production. Received awards for contribution and excellence in technical execution."
  },
  ],
  education: [
    {
      school: "USICT GGSIPU",
      href: "",
      degree: "Bachelors of Technology, Computer Science and Engineering",
      logoUrl: "/usict.png",
      start: "2025",
      end: "present",
    },
    {
      school: "Montfort School, Delhi",
      href: "https://montfortschooldelhi.in/",
      degree: "Completed Schooling, High School Diploma",
      logoUrl: "/montfort.png",
      start: "2011",
      end: "2025",
    },

  ],
  projects: [
    {
  "title": "TalentLoop",
  "href": "",
  "dates": "Nov 2025 - Present",
  "active": true,
  "description": "TalentLoop is an AI-powered interview platform that conducts realistic, voice-based conversations with candidates using digital recruiters. Built with Pipecat and Tavus, it delivers adaptive, context-aware interviews through RAG and a modern Next.js interface.",
  "technologies": [
    "Next.js",
    "Typescript",
    "Python",
    "FastAPI",
    "Pipecat",
    "Tavus.io",
    "Supabase",
    "Prisma",
    "TailwindCSS",
    "Shadcn UI",
    "RAG (Retrieval-Augmented Generation)"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
   
  ],
  hackathons: [
    {
      title: "HackVision - IEEE NSUT",
      dates: "November 1st - 3rd, 2025",
      location: "NSUT, Delhi",
      description:
        "Developed TalentLoop - an AI Interview platform with lifelike AI interview avatars to speed up the screening process for recruiters.",
      image:
        "/nsut.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
  ],
} as const;
