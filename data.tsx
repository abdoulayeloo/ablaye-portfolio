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
  FaPhoneAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si";
export const navLinks = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "CV",
    href: "/resume",
  },
  {
    name: "réalisations",
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
    value: "dst",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "02",
    title: "UI/UX",
    value: "esc",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "03",
    title: "Logo Design",
    value: "cst",
    description:
      "lorem ipsum dolor sit am liber tempor a ante et just temp ullamcorper",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "04",
    title: "SEO Optimisation",
    value: "mst",
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
        fieldValue: "(+221) 77 778 06 20",
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
  projets: [
    {
      num: "01",
      category: "Next.js",
      title: "Next Auth V5",
      live: "#",
      github: "https://github.com/abdoulayeloo/next-auth-v5",
      description:
        "J'ai eu à réaliser un projet avec NextAuth.js v5, une bibliothèque puissante pour l'authentification dans les applications Next.js. Ce projet m'a permis de configurer un système d'authentification sécurisé avec des fournisseurs OAuth comme Google et GitHub, tout en gérant les sessions utilisateur de manière efficace. J'ai également personnalisé la gestion des tokens et des sessions via l'API middleware, et intégré une base de données pour stocker et gérer les utilisateurs. Grâce à l'utilisation de Typescript, j'ai assuré une meilleure robustesse et maintenabilité du code.",
      stack: [
        { name: "html 5" },
        { name: "tailwind.css" },
        { name: "Next.js" },
        { name: "typescript" },
        { name: "prisma" },
        { name: "mysql" },
      ],
    },
    {
      num: "02",
      category: "React Native",
      title: "Blanchisserie Mobile App",
      live: "#",
      github: "https://github.com/abdoulayeloo/Blanchisserie",
      description:
        "Un projet développé avec React Native, une bibliothèque puissante permettant de créer des applications mobiles natives tout en utilisant des technologies web comme JavaScript. L'application est compatible avec les deux principales plateformes mobiles, iOS et Android, offrant une expérience utilisateur fluide et native sur chaque appareil. Grâce à React Native, j'ai pu concevoir une interface utilisateur réactive et optimisée, en utilisant des composants natifs pour garantir des performances optimales. Le projet inclut des fonctionnalités de gestion des utilisateurs, d'authentification, et d'intégration avec des services backend, tout en garantissant une expérience homogène sur toutes les plateformes. Les technologies complémentaires comme React Redux pour la gestion de l'état, Prisma pour les interactions avec la base de données, et Tailwind CSS pour la mise en page rapide et stylée ont été utilisées pour construire une solution complète et robuste.",
      stack: [
        { name: "html 5" },
        { name: "tailwind.css" },
        { name: "react native" },
        { name: "react redux" },
        { name: "prisma" },
        { name: "mysql" },
      ],
    },
    {
      num: "03",
      category: "FullStack",
      title: "SenRestaurant",
      live: "#",
      github: "https://github.com/abdoulayeloo/senRestaurant",
      description:
        "Un projet développé avec React Native, une bibliothèque puissante permettant de créer des applications mobiles natives tout en utilisant des technologies web comme JavaScript. L'application est compatible avec les deux principales plateformes mobiles, iOS et Android, offrant une expérience utilisateur fluide et native sur chaque appareil. Grâce à React Native, j'ai pu concevoir une interface utilisateur réactive et optimisée, en utilisant des composants natifs pour garantir des performances optimales. Le projet inclut des fonctionnalités de gestion des utilisateurs, d'authentification, et d'intégration avec des services backend, tout en garantissant une expérience homogène sur toutes les plateformes. Les technologies complémentaires comme React Redux pour la gestion de l'état, Prisma pour les interactions avec la base de données, et Tailwind CSS pour la mise en page rapide et stylée ont été utilisées pour construire une solution complète et robuste.",
      stack: [
        { name: "html 5" },
        { name: "tailwind.css" },
        { name: "react native" },
        { name: "react redux" },
        { name: "firebase" },
      ],
    },
    {
      num: "04",
      category: "Next.js",
      title: "Next.js Dashboard",
      live: "#",
      github: "https://github.com/abdoulayeloo/next-s-dashboard",
      description:
        "Un projet FullStack développé avec Next.js, un framework puissant basé sur React permettant de créer des applications web modernes et performantes. Le tableau de bord offre une interface utilisateur interactive et réactive, permettant une gestion optimisée des données en temps réel. Grâce à la puissance de Next.js, l'application bénéficie du rendu côté serveur (SSR) et du rendu statique (SSG), améliorant ainsi les performances et le référencement. Le projet inclut des fonctionnalités d'authentification, de gestion de contenu et d'intégration avec des services backend, garantissant une solution complète et flexible. Les technologies complémentaires telles que Tailwind CSS pour la mise en page rapide et stylée sont également utilisées pour offrir une expérience utilisateur optimale.",
      stack: [
        { name: "html 5" },
        { name: "tailwind.css" },
        { name: "next.js" },
        { name: "react" },
        { name: "prisma" },
        { name: "mysql" },
      ],
    },
  ],
};

export const contact = {
  title: "Collaborons!",
  description:
    "N'hésitez pas à me contacter si vous avez de collaborer ou si vous avez des questions sur mon travail.",
  info: [
    {
      icon: FaPhoneAlt,
      title: "Téléphone",
      href: "https://wa.me/+221777780620",
      description: "(+221) 77 778 06 20",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      href: "mailto:faarame@gmail.com",
      description: "faarame@gmail.com",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Adresse",
      description: "HLM Paris N•67 Guédiawaye, Dakar",
    },
  ],
};

export const choix = [
  {
    title: "Site Vitrine",
    value: "dst",
  },
  {
    title: "Site Catalogue",
    value: "ast",
  },
  {
    title: "Site E-commerce",
    value: "abt",
  },
  {
    title: "SEO Optimisation",
    value: "mst",
  },
  {
    title: "UI/UX",
    value: "esc",
  },
  {
    title: "Logo Design",
    value: "cst",
  },
];
