import dashboardLargeImage from "./assets/images/dashboard.large.png";
import dashboardSmallImage from "./assets/images/dashboard.png";
import groceryListLargeImage from "./assets/images/grocery-list.large.png";
import groceryListSmallImage from "./assets/images/grocery-list.png";
import kindCollectiveLargeImage from ".assets/images/kind-collective.large.png";
import kindCollectiveSmallImage from ".assets/images/kind-collective.small.png";
import pointifyLargeImage from ".assets/images/pointify.large.png";
import pointifySmallImage from ".assets/images/pointify.small.png";

const projectDataDetail = {
  "personal-dashboard": {
    id: 1,
    title: "Personal Dashboard",
    shortDescription:
      "A Chrome Extension that gives you an overview of the current time, the weather, and Bitcoin's performance.",
    fullDescription:
      "This Personal Dashboard is a dynamic, web-based interface designed to provide real-time information including cryptocurrency data, local weather, a digital clock, and a daily inspirational background. It utilizes various APIs to fetch real-time data, which makes it a practical tool for everyday use.",
    imageUrl: dashboardLargeImage,
    mobileImageUrl: dashboardSmallImage,
    liveProjectUrl: "https://germaines-personal-dashboard.netlify.app/",
    codeUrl: "https://github.com/GermaineDeNigris/personal-dashboard",
    toolsUsed: ["HTML", "CSS", "JavaScript", "External APIs", "Google Fonts"],
  },
  "grocery-list": {
    id: 2,
    title: "Grocery List",
    shortDescription:
      "An interactive grocery list application that allows users to add and manage items in a shopping list.",
    fullDescription:
      "This Personal Dashboard is a dynamic, web-based interface designed to provide real-time information including cryptocurrency data, local weather, a digital clock, and a daily inspirational background. It utilizes various APIs to fetch real-time data, which makes it a practical tool for everyday use.",
    imageUrl: groceryListLargeImage,
    mobileImageUrl: groceryListSmallImage,
    liveProjectUrl: "https://germaines-grocery-list.netlify.app/",
    codeUrl: "https://github.com/GermaineDeNigris/Grocery-List",
    toolsUsed: ["HTML", "CSS", "JavaScript", "Firebase", "Google Fonts"],
  },
  "kind-collective": {
    id: 3,
    title: "Kind Collective Website",
    shortDescription:
      "A bespoke website that marries custom coding with expressive design",
    fullDescription:
      "From the seamless user interface to the dynamic content, the site stands as a testament to the harmonious blend of form and function. Envisioned as a canvas for creativity, it’s more than a website; it’s a journey through a curated experience designed to engage, inspire, and captivate the imaginative spirit of its visitors.Creating KindCollective.us involved a symphony of coding skills that brought its digital presence to life. Front-end development utilized HTML5 and CSS3 for structuring and styling, ensuring the site's design was both responsive and visually engaging. JavaScript and jQuery were implemented for dynamic interactivity, enhancing user experience with seamless navigation. For the back-end, we leveraged PHP for server-side scripting and MySQL for database management, providing a robust foundation. SEO optimization techniques were applied to improve visibility, and rigorous testing was conducted for cross-browser compatibility, ensuring accessibility for all users.",
    imageUrl: kindCollectiveLargeImage,
    mobileImageUrl: kindCollectiveSmallImage,
    liveProjectUrl: "https://kindcollective.us/",
    codeUrl: "https://github.com/GermaineDeNigris/kindcollective.us",
    toolsUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Netlify Forms",
      "Google Fonts",
    ],
  },
  pointify: {
    id: 4,
    title: "Pointify Website",
    shortDescription:
      "A highly interactive and user-centric website for a web application focused on financial optimization through intelligent credit card selection for online purchases.",
    fullDescription:
      "This website is a testament to meticulous design and coding expertise, utilizing React for dynamic user interactions, CSS animations for engaging visuals, and responsive design practices to ensure a seamless experience on any device.",
    imageUrl: pointifyLargeImage,
    mobileImageUrl: pointifySmallImage,
    liveProjectUrl: "https://pointify-app.netlify.app/",
    codeUrl: "https://github.com/GermaineDeNigris/pointify",
    toolsUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Netlify Forms",
      "Google Fonts",
    ],
  },
};

export default projectDataDetail;
