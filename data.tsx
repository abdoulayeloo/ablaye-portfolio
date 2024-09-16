import { title } from "process";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaPhone,
  FaExpand,
  FaSkype,
  FaFlag,
  FaEnvelope,
  FaAt,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
  FaWordpress,
  FaGit,
} from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si";
export const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

export const socials = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/ablayelo/",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ablayeloo/",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ablayeloo",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/ablayeloo",
  },
  {
    icon: FaGithub,
    href: "https://github.com/abdoulayeloo",
  },
];

export const stats = [
  {
    num: 3,
    text: "Année d'expérience",
  },
  {
    num: 14,
    text: "Projet réalisés",
  },
  {
    num: 9,
    text: "Technologies maîtrisées",
  },
  {
    num: 511,
    text: "Code Commits",
  },
];

export const services = [
  {
    num: "01",
    title: "Developpment Web",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "04",
    title: "SEO Optimisation",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
];

export const resume = {
  about: {
    title: "A propos de moi",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pharetra nisi, vel consectetur neque. Sed viverra, dui vitae dignissim tristique, enim felis consectetur neque, vitae commodo velit velit nec nunc.",
    info: [
      {
        fieldName: "Nom",
        fieldValue: "Ablaye LO",
        fieldIcon: FaUser,
      },
      {
        fieldName: "Téléphone",
        fieldValue: "(+221 77 778 06 20)",
        fieldIcon: FaPhone,
      },
      {
        fieldName: "Expérience",
        fieldValue: "+5 ans",
        fieldIcon: FaExpand,
      },
      {
        fieldName: "Skype",
        fieldValue: "ablayeloo",
        fieldIcon: FaSkype,
      },
      {
        fieldName: "Nationalité",
        fieldValue: "Sénégalaise",
        fieldIcon: FaFlag,
      },
      {
        fieldName: "Email",
        fieldValue: "ablayeloo@gmail.com",
        fieldIcon: FaAt,
      },
      {
        fieldName: "FreeLance",
        fieldValue: "Disponible",
        fieldIcon: FaAt,
      },
      {
        fieldName: "Languges",
        fieldValue: "Français, Anglais, Arabe, Wolof",
        fieldIcon: FaAt,
      },
    ],
  },
  experience: {
    icon: "/assets/resume/badge.svg",
    title: "Mon expérience",
    description:
      "Lorem Ipsum is Lorem Ipsum is exactly equivalent to Lorem Ipsum",
    items: [
      {
        company: "Likagroupe",
        position: "Developeur FullStack",
        duration: "Avril 2023 - Present",
      },
      {
        company: "Likagroupe",
        position: "Webmaster",
        duration: "Avril 2022 - Mars 2023",
      },
      {
        company: "UADB",
        position: "Projet fin d'étude",
        duration: "Novembre 2021 - Avril 2022",
      },
      {
        company: "Xbit Pro (Stage)",
        position: "Content management",
        duration: "Été 2019",
      },
    ],
  },
  education: {
    icon: "/assets/resume/cap.svg",
    title: "Mon éducation",
    description:
      "Lorem Ipsum is Lorem Ipsum is exactly equivalent to Lorem Ipsum",
    items: [
      {
        institution: "Université Alioune Diop",
        degree: "Licence Professionnelle en Systéme Réseaux & Télécom",
        duration: "Nov 2017 - Juillet 2021",
      },
      {
        institution: "Udemy Courses",
        degree: "Coding With Ruby",
        duration: "Sept 2024 (En cours)",
      },
      {
        institution: "Udemy Courses",
        degree: "Ruby On Rails",
        duration: "Sept 2024 (En cours)",
      },
      {
        institution: "Programming Hub",
        degree: "Advanced Python Certificate",
        duration: "Nov 2021",
      },
      {
        institution: "Programming Hub",
        degree: "Advanced JavaScript Certificate",
        duration: "Oct 2021",
      },
      {
        institution: "Programming Hub",
        degree: "Laravel Certificate",
        duration: "Sep 2021",
      },
      {
        institution: "Lycée Limamoulaye",
        degree: "Baccalauréat Scientifiques (Serie S2)",
        duration: "2013 - 2027",
      },
    ],
  },
  skills: {
    // icon: "/assets/resume/cap.svg",
    title: "Mes competences",
    description:
      "Lorem Ipsum is Lorem Ipsum is exactly equivalent to Lorem Ipsum",
    skillList: [
      {
        icon: FaHtml5,
        skillName: "html 5",
      },
      {
        icon: FaCss3,
        skillName: "ccs 3",
      },
      {
        icon: FaJs,
        skillName: "javascript",
      },
      {
        icon: SiNodedotjs,
        skillName: "Node.js",
      },
      {
        icon: FaReact,
        skillName: "react.js",
      },
      {
        icon: SiNextdotjs,
        skillName: "next.js",
      },
      {
        icon: SiTailwindcss,
        skillName: "tailwind.css",
      },
      {
        icon: FaPhp,
        skillName: "php",
      },
      {
        icon: FaLaravel,
        skillName: "laravel",
      },
      {
        icon: FaWordpress,
        skillName: "wordpress",
      },
      {
        icon: FaGit,
        skillName: "git",
      },
    ],
  },
};
