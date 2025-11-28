export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "ocr-frontend",
    title: "OCR Frontend",
    description:
      "A final project for both academic and business use, featuring OCR capabilities with FastAPI backend.",
    longDescription:
      "This project is a comprehensive OCR application built with React and FastAPI. It serves both academic purposes and real-world business needs, allowing users to extract text from images and documents efficiently. The application features a modern, responsive frontend and a robust backend API.",
    technologies: ["React", "OCR", "FastAPI", "Python"],
    githubUrl: "https://github.com/313badri",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: "face-detection",
    title: "Face Detection App",
    description:
      "Webcam-based face detection and verification using Azure Face API or alternative APIs.",
    longDescription:
      "A real-time face detection application that uses webcam input to detect and verify faces. Built with modern web technologies and integrated with Azure Face API (or alternative APIs), this application provides accurate face recognition capabilities for various use cases including security and authentication systems.",
    technologies: ["React", "Azure Face API", "Webcam API", "JavaScript"],
    githubUrl: "https://github.com/313badri",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  },
  {
    id: "formal-letter-automation",
    title: "Formal Letter Automation App",
    description:
      "Help Afghan citizens generate government-approved formal letters efficiently.",
    longDescription:
      "This project aims to simplify the process of creating formal letters for Afghan citizens. The application will help users generate government-approved letters with proper formatting and templates, reducing the time and effort required for official documentation. This is an ongoing project that I'm passionate about.",
    technologies: ["React", "Next.js", "Form Handling", "PDF Generation"],
    githubUrl: "https://github.com/313badri",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  },
  {
    id: "mis-hospital",
    title: "MIS & Hospital Systems",
    description:
      "Management Information Systems and Hospital Management solutions built with modern technologies.",
    longDescription:
      "Comprehensive management information systems and hospital management solutions designed to streamline operations, manage patient records, and improve overall efficiency. These systems are built with scalability and user experience in mind.",
    technologies: ["React", "Next.js", "Database", "API Integration"],
    githubUrl: "https://github.com/313badri",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
  },
  {
    id: "react-router-app",
    title: "React Router Application",
    description:
      "A complex React application demonstrating advanced routing and state management.",
    longDescription:
      "A sophisticated React application showcasing advanced routing patterns, state management, and modern React best practices. This project demonstrates my expertise in building scalable single-page applications with complex navigation requirements.",
    technologies: ["React", "React Router", "State Management", "TypeScript"],
    githubUrl: "https://github.com/313badri",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: "future-project-1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with advanced features and seamless user experience.",
    longDescription:
      "An upcoming project for building a comprehensive e-commerce platform with features like product management, shopping cart, payment integration, and order tracking. This will showcase full-stack development capabilities.",
    technologies: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
];

