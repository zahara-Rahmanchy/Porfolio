// projectsData.js

export const projectData = [
  {
    title: "HelpMates",
    type: "A Next.js FullStack Application",
    description:
      "Helpmates is a volunteer platform that connects individuals with service opportunities tailored to their skills, interests, and availability. Admins post volunteer positions across various categories such as environmental conservation, animal welfare, healthcare, and education. Each listing provides key details—required skills, volunteer benefits, and location—enabling users to make informed choices.\n\nVolunteers can browse and filter opportunities by category or location, applying directly on the site. Upon completing a role, they receive certificates to enhance personal and professional growth. The platform features a dashboard for both volunteers and admins, offering insights into application statuses, volunteer hours, and overall participation metrics. This comprehensive management system allows users to track their contributions and progress effectively.",
    image: ["/helpMates.png", "/helpMatesOpp.png"],
    github_client: "https://github.com/zahara-Rahmanchy/HelpMates-frontend",
    github_server:
      "https://github.com/zahara-Rahmanchy/HelpMates-volunteer-Backend",
    websiteLink: "https://help-mates-frontend-1fiy.vercel.app",
    technologies: [
      "Next js",
      "React",
      "Redux",
      "Material UI",
      "Express js",
      "PostgresSQL",
      "Prisma",
      "JWT",
      "Railway server",
      "Vercel",
    ],
  },
  {
    title: "Craftopia",
    type: "A Mern Stack Application",
    description:
      "Craftopia is a web application built using React JS, TailwindCSS,Express JS and various technologies. It offers a range offeatures for students, instructors, and administrators. Thehome page showcases popular classes, instructors, and campschedules. Dashboards are available for each user type.Students can select classes, instructors can manage theirclasses, and admins handle user management and classapprovals. Payment is facilitated through Stripe. Userauthentication is implemented using JWT tokens and Firebase.MongoDB serves as the database. Craftopia integrates variouspackages for enhanced functionality. Firebase and Vercel areused for hosting and deployment.",
    image: ["/craftopia.png"],
    github_client:
      "https://github.com/zahara-Rahmanchy/Craftopia-Summer-Camp-client-",
    github_server:
      "https://github.com/zahara-Rahmanchy/Craftopia-Summer-Camp-server",
    website_link: "https://craftopia-d6da7.web.app/",
    technologies: [
      "React",
      "Tailwind",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "Vercel",
    ],
  },
  {
    title: "PawFectMatch",
    type: "A Next.js FullStack Application",
    description:
      "PawFectMatch is a pet adoption web application that connects users with pets up for adoption. It allows users to register, submit adoption requests, and manage their profiles. Admins can manage pet details, update adoption requests, and view adopted pets. The app uses JWT for secure authentication and offers an easy-to-use platform for a seamless adoption experience.",
    technologies: [
      "Next.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "PostgresSQL",
      "Prisma",
      "JWT",
    ],
    github_client: "https://github.com/zahara-Rahmanchy/Adoption",
    github_server: "https://github.com/zahara-Rahmanchy/Adoption-server.git",
    website_link: "https://adoption-three.vercel.app",
    image: [
      "/Adoption.png",
      "/adoptionDashboardAdminManagePet.png",
      "/adoptionDashboardAdminAddPet.png",
      "/adoptionDashboardAdminUsers.png",
      "/adoptionRequests.png",
    ],
  },
  {
    title: "Funfinity",
    type: "A Mern Stack Application",
    description: `Funfinity is a vibrant toy selling website that utilizes
                   React.js, Tailwind CSS, and Express.js. It offers a diverse
                    selection of toys for children, presented in an appealing and
                    interactive manner. Users can explore the website&apos;s home
                    page, which features a captivating banner, an enticing toy
                    gallery, and informative sections. The "All Toys" page allows
                    users to browse and search for toys, with sorting options
                    available. Registered users can add new toys, manage their
                    inventory, and update or delete existing toy listings.
                    Funfinity incorporates Firebase authentication for seamless
                    login and signup functionality, ensuring secure access to user
                    accounts. With its attractive design and user-friendly
                    features, Funfinity provides an enjoyable and seamless
                    shopping experience for toy enthusiasts of all ages.`,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    github_client: "https://github.com/zahara-Rahmanchy/Funfinity-client-",
    github_server: "https://github.com/zahara-Rahmanchy/Funfinity-server",
    website_link: "https://funfinity-toys.web.app/",
    image: ["/funfinity.png"],
  },

  {
    title: "Flavour Adventure",
    type: "A Mern Stack Application",
    description:
      "Flavour Adventure is a food-focused MERN stack application showcasing profiles of top chefs and their dishes. The site includes Firebase authentication and exclusive access to detailed chef profiles for logged-in users. It features a sleek and engaging design and introduces each chef's top recipes, creating a delightful browsing experience for food enthusiasts.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    github_client:
      "https://github.com/zahara-Rahmanchy/Flavor-Adventure-client-",
    github_server:
      "https://github.com/zahara-Rahmanchy/Flavour-Adventure-server-",
    website_link: "https://flavor-adventure-client-side.web.app",
    image: ["/flavor.png"],
  },
  {
    title: "Weather Application",
    type: "A JavaScript Application",
    description:
      " The weather website is a responsive platform that provides real-time weather information for various locations worldwide. Built using raw HTML, CSS, and JavaScript, it features an intuitive interface that allows users to search for cities and access essential weather data, such as temperature, humidity, and wind speed. The clean design ensures easy navigation, while dynamic backgrounds change based on current weather conditions, enhancing the overall user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github_client: "https://github.com/zahara-Rahmanchy/weather-app",
    website_link: "https://weather-app-live-example.netlify.app",
    image: ["/weatherApp.png"],
  },
  {
    title: "Plantify",
    type: "A Landing Page",
    description:
      "Plantify is a responsive landing page built with raw HTML and CSS, showcasing a variety of plants along with informative content about plant care. The design is intuitive and features clean visuals, smooth navigation, and engaging animations, offering users an enjoyable browsing experience.",
    technologies: ["HTML", "CSS"],
    github_client: "https://github.com/zahara-Rahmanchy/Plantify",
    website_link: "https://idyllic-fox-d3d902.netlify.app",
    image: ["/plantify.png"],
  },
];

export default projectData;
