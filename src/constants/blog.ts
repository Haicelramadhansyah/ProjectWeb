import type { Blog } from "@/types";

export const blogList: Blog[] = [
  {
    slug: "what-is-owasp-top-10",
    title: "What Is OWASP Top 10?",
    description: [
      "OWASP Top 10 is a standard awareness document published by the Open Web Application Security Project (OWASP), listing the ten most critical security risks to web applications. It serves as a foundational reference for developers, security professionals, and organizations aiming to build more secure software.",
      "The list is compiled based on data from security researchers and organizations worldwide, ranking vulnerabilities by their prevalence, exploitability, and potential impact. Common entries include Broken Access Control, Cryptographic Failures, Injection (such as SQL Injection), and Security Misconfiguration.",
      "Understanding OWASP Top 10 is essential not only for penetration testers, but also for software engineers, since many of these vulnerabilities originate from insecure coding practices during development. By learning this list, developers can proactively prevent security flaws instead of fixing them after deployment.",
      "Practicing these concepts hands-on, for example through platforms like TryHackMe, helps bridge the gap between theory and real-world exploitation scenarios, giving a clearer picture of how attackers think and how to defend against them.",
      "As web applications grow more complex, OWASP regularly updates this list to reflect emerging threats, making it a living reference that every developer and security enthusiast should keep revisiting.",
    ],
    thumbnailImage: "/assets/images/owasp.webp",
    categories: [
      {
        name: "Cyber Security",
        color: "red.500",
      },
      {
        name: "Security",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2024-06-10"),
    author: {
      name: "Haicel Ramadhansyah",
      profileImage: "/assets/images/haicelramadhansyah.jpeg",
    },
  },
  {
    slug: "what-is-clean-code",
    title: "What Is Clean Code?",
    description: [
      "Clean Code refers to a set of principles and practices in software engineering aimed at writing code that is easy to read, understand, and maintain. The term was popularized by Robert C. Martin (Uncle Bob) in his book of the same name, and remains a core concept in professional software development.",
      "Clean code is not just about making a program run correctly, but also about how the code communicates its intent to other developers (or your future self). This includes meaningful naming conventions, small and focused functions, minimal code duplication, and clear structure.",
      "Some key principles of clean code include the Single Responsibility Principle (each function/class should do one thing), avoiding deep nesting, writing self-explanatory code instead of relying heavily on comments, and consistent formatting throughout the codebase.",
      "Writing clean code becomes increasingly important as projects scale and involve multiple contributors. Messy, unstructured code leads to higher maintenance costs, more bugs, and difficulty onboarding new developers into a project.",
      "As a software engineering student, practicing clean code early on—whether in academic projects or personal projects—builds a strong foundation for writing production-ready, professional-grade software in the future.",
    ],
    thumbnailImage: "/assets/images/cleancode.png",
    categories: [
      {
        name: "Software Engineering",
        color: "blue.500",
      },
      {
        name: "Programming",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2024-06-08"),
    author: {
      name: "Haicel Ramadhansyah",
      profileImage: "/assets/images/haicelramadhansyah.jpeg",
    },
  },
  {
    slug: "what-is-game-loop",
    title: "What Is Game Loop?",
    description: [
      "A Game Loop is the core mechanism that drives a game's execution, continuously running while the game is active to process input, update game state, and render graphics to the screen. It is one of the most fundamental concepts in game development.",
      "At its simplest, a game loop consists of three main phases: processing input (keyboard, mouse, or controller), updating game logic (physics, collision detection, AI behavior), and rendering the updated frame to the display. This cycle repeats continuously, often dozens of times per second.",
      "One critical aspect of game loop design is managing frame rate consistency. Techniques like fixed timestep and delta time are used to ensure the game behaves consistently regardless of the hardware's processing speed, preventing issues like objects moving faster on high-performance devices.",
      "Modern game engines such as Unity, Godot, and LibGDX abstract much of the low-level game loop implementation, allowing developers to focus on game logic rather than manually managing the update-render cycle. However, understanding what happens under the hood remains valuable for debugging performance issues.",
      "Learning how a game loop works is often the first step in game development, forming the foundation before diving into more advanced topics like physics engines, animation systems, and multiplayer synchronization.",
    ],
    thumbnailImage: "/assets/images/gameloop.png",
    categories: [
      {
        name: "Game Development",
        color: "purple.500",
      },
      {
        name: "Programming",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2024-06-05"),
    author: {
      name: "Haicel Ramadhansyah",
      profileImage: "/assets/images/haicelramadhansyah.jpeg",
    },
  },
];