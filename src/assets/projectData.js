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
    website_link: "https://help-mates-frontend-1fiy.vercel.app/",
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
      "Craftopia is a web application built using React JS, Tailwind CSS,Express JS and various technologies. It offers a range offeatures for students, instructors, and administrators. The home page showcases popular classes, instructors, and campschedules. Dashboards are available for each user type.Students can select classes, instructors can manage their classes, and admins handle user management and class approvals. Payment is facilitated through Stripe. User authentication is implemented using JWT tokens and Firebase.MongoDB serves as the database. Craftopia integrates various packages for enhanced functionality. Firebase and Vercel areused for hosting and deployment.",
    image: ["/craftopia.png"],
    github_client:
      "https://github.com/zahara-Rahmanchy/Craftopia-Summer-Camp-client-",
    github_server:
      "https://github.com/zahara-Rahmanchy/Craftopia-Summer-Camp-server",
    website_link: "https://craftopia-d6da7.web.app/",
    technologies: [
      "React",
      "Tailwind CSS",
      "Daisy UI",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
      "Vercel",
    ],
  },
  {
    title: "Furniture Hub",
    type: "A Mern Stack Application",
    description:
      "Sellers can list, update, and manage furniture, track sales, and offer polishing services, while buyers can browse, filter, add to cart, and place orders.JWT for secure authentication and role-based access control and access of specifc features",
    image: ["/Furniture1.png", "/Furniture3.png", "/Furniture2.png"],
    github_client:
      "https://github.com/zahara-Rahmanchy/FurnitureMarketplace-Client",
    github_server:
      "https://github.com/zahara-Rahmanchy/Furniture-marketplace-server.git",
    website_link: "https://furniture-marketplace-client.vercel.app",
    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Material-Tailwind",
      "Express Js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Vercel",
    ],
  },
  // {
  //   title: "PawFectMatch",
  //   type: "A Next.js FullStack Application",
  //   description:
  //     "PawFectMatch is a pet adoption web application that connects users with pets up for adoption. It allows users to register, submit adoption requests, and manage their profiles. Admins can manage pet details, update adoption requests, and view adopted pets. The app uses JWT for secure authentication and offers an easy-to-use platform for a seamless adoption experience.",
  //   technologies: [
  //     "Next.js",
  //     "Material UI",
  //     "Node.js",
  //     "Express.js",
  //     "PostgresSQL",
  //     "Prisma",
  //     "JWT",
  //   ],
  //   github_client: "https://github.com/zahara-Rahmanchy/Adoption",
  //   github_server: "https://github.com/zahara-Rahmanchy/Adoption-server.git",
  //   website_link: "https://adoption-three.vercel.app",
  //   image: [
  //     "/Adoption.png",
  //     "/adoptionDashboardAdminManagePet.png",
  //     "/adoptionDashboardAdminAddPet.png",
  //     "/adoptionDashboardAdminUsers.png",
  //     "/adoptionRequests.png",
  //   ],
  // },
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
      "Daisy UI",
    ],
    github_client: "https://github.com/zahara-Rahmanchy/Funfinity-client-",
    github_server: "https://github.com/zahara-Rahmanchy/Funfinity-server",
    website_link: "https://funfinity-toys.web.app/",
    image: ["/funfinity.png"],
  },
  {
    title: "AI Story Generator",
    type: "Mern Stack Application",
    github_client:
      "https://github.com/zahara-Rahmanchy/StoryGenerator/tree/main/ShortStories-frontend",
    github_server:
      "https://github.com/zahara-Rahmanchy/StoryGenerator/tree/main/shortStoriesBackend",
    website_link: "https://generateshortstories.netlify.app/",
    description:
      "The AI Story Generator is an innovative platform that allows users to create unique stories with ease. With a simple sign-up process, users can access the full range of features, including generating stories based on custom prompts, sharing their creations with a wider audience, and exploring stories shared by others. Interactive features, such as upvoting and saving stories, allow users to engage deeply with content, while a dynamic leaderboard showcases top-voted stories for added recognition. Whether you're a writer or a reader, the AI Story Generator offers a seamless and enjoyable storytelling experience.",
    technologies: [
      "React JS",

      "Express JS",
      "Firebase Authentication",
      "MongoDB",

      "Cohere API for prompt generation",
    ],
    image: ["/generateshortstories1.png", "/generateshortstories2.png"],
  },

  {
    title: "Flavour Adventure",
    type: "A Mern Stack Application",
    description:
      "Flavour Adventure is a food-focused MERN stack application showcasing profiles of top chefs and their dishes. The site includes Firebase authentication and exclusive access to detailed chef profiles for logged-in users. It features a sleek and engaging design and introduces each chef's top recipes, creating a delightful browsing experience for food enthusiasts.",
    technologies: [
      "React.js",
      "Bootstrap",
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
    github_client: "https://github.com/zahara-Rahmanchy/WeatherApp",
    website_link: "https://weatherappsite123.netlify.app",
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
