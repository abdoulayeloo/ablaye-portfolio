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
  FaDev,
  FaLanguage,
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
    href: "/cv",
  },
  {
    name: "réalisations",
    href: "/realisations",
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
    text: "Années d'expérience",
  },
  {
    num: 14,
    text: "Projets réalisés",
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
    title: "Développement Web",
    value: "dst",
    description:
      "Faites créer votre site web avec des technologies modernes comme Next.js ou Laravel, offrant performance, sécurité et évolutivité.",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "02",
    title: "Site Vitrine",
    value: "dst",
    description:
      "Conception de sites vitrines attractifs pour présenter votre entreprise en ligne, avec une mise en avant de vos services et produits.",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "03",
    title: "Site Catalogue",
    value: "dst",
    description:
      "Développez un site catalogue sur mesure pour présenter vos produits en ligne avec une gestion facile des articles et des catégories.",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "04",
    title: "Site E-commerce",
    value: "dst",
    description:
      "Créez un site e-commerce complet avec une intégration de paiement sécurisé, gestion des commandes et une expérience d'achat fluide.",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "06",
    title: "Logo Design",
    value: "cst",
    description:
      "Conception de logos sur mesure qui reflètent l'essence de votre marque et captivent l'attention de vos clients.",
    href: "https://github.com/abdoulayeloo",
  },
  {
    num: "07",
    title: "SEO Optimisation",
    value: "mst",
    description:
      "Optimisation de votre site pour les moteurs de recherche, augmentant sa visibilité et attirant un trafic ciblé grâce à des techniques SEO avancées.",
    href: "https://github.com/abdoulayeloo",
  },
];

export const cv = {
  about: {
    title: "À propos de moi",
    icon: "/assets/resume/about.svg",
    description:
      "Je suis Ablaye LO, développeur web passionné avec une certaine expertise dans les technologies modernes comme Next.js, React, et Laravel. Mon objectif est de créer des solutions numériques sur mesure qui répondent aux besoins spécifiques de mes clients. Je me consacre à offrir des expériences utilisateur de qualité et des performances optimales à travers mes compétences en développement full-stack.",
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
        fieldValue: "3 ans",
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
        fieldValue: "faarame@gmail.com",
        fieldIcon: FaAt,
      },
      {
        fieldName: "FreeLance",
        fieldValue: "Disponible",
        fieldIcon: FaDev,
      },
      {
        fieldName: "Languges",
        fieldValue: "Français, Anglais, Arabe, Wolof",
        fieldIcon: FaLanguage,
      },
    ],
  },
  experience: {
    icon: "/assets/resume/badge.svg",
    title: "Mon expérience",
    description:
      "Avec plusieurs années d'expérience dans le développement web et la gestion de contenu, j'ai travaillé sur des projets variés allant du développement FullStack à la création de sites web et à la gestion de contenu. Mon parcours m'a permis de maîtriser des technologies modernes et d'acquérir des compétences solides en gestion de projets numériques.",
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
      "Un parcours académique solide avec une spécialisation en systèmes, réseaux et télécoms, complété par des formations continues en développement web et programmation avancée.",
    items: [
      {
        institution: "Université Alioune Diop",
        degree: "Licence Professionnelle en Systèmes Réseaux & Télécom",
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
        degree: "Baccalauréat Scientifique (Série S2)",
        duration: "2013 - 2017",
      },
    ],
  },
  skills: {
    icon: "/assets/resume/skills.svg",
    title: "Mes compétences",
    description:
      "Maîtrise des langages de programmation et frameworks modernes, avec une expertise dans le développement full-stack et la gestion de projets web.",
    skillList: [
      {
        icon: FaHtml5,
        skillName: "HTML 5",
      },
      {
        icon: FaCss3,
        skillName: "CSS 3",
      },
      {
        icon: FaJs,
        skillName: "JavaScript",
      },
      {
        icon: SiNodedotjs,
        skillName: "Node.js",
      },
      {
        icon: FaReact,
        skillName: "React.js",
      },
      {
        icon: SiNextdotjs,
        skillName: "Next.js",
      },
      {
        icon: SiTailwindcss,
        skillName: "Tailwind CSS",
      },
      {
        icon: FaPhp,
        skillName: "PHP",
      },
      {
        icon: FaLaravel,
        skillName: "Laravel",
      },
      {
        icon: FaWordpress,
        skillName: "WordPress",
      },
      {
        icon: FaGit,
        skillName: "Git",
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
        "J'ai réalisé un projet utilisant NextAuth.js v5 pour implémenter une authentification sécurisée dans une application Next.js. J'ai configuré des fournisseurs OAuth tels que Google et GitHub, géré efficacement les sessions utilisateur, personnalisé la gestion des tokens et des sessions via l'API middleware, et intégré une base de données pour la gestion des utilisateurs. L'utilisation de TypeScript a renforcé la robustesse et la maintenabilité du code.",
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
    "N'hésitez pas à me contacter pour toute collaboration ou si vous souhaitez en savoir plus sur mon travail.",
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
      href: "https://maps.app.goo.gl/2febQg51DCKzMPyg7", 
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
