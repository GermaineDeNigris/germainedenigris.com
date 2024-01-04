import dashboardImage from './assets/images/dashboard.large.png';
import groceryListImage from './assets/images/grocery-list.large.png';

const projectDataDetail = {
  'personal-dashboard': {
    id: 1,
    title: "Personal Dashboard",
    shortDescription: "A Chrome Extension that gives you an overview of the current time, the weather, and Bitcoin's performance.",
    fullDescription: "This Personal Dashboard is a dynamic, web-based interface designed to provide real-time information including cryptocurrency data, local weather, a digital clock, and a daily inspirational background. It utilizes various APIs to fetch real-time data, which makes it a practical tool for everyday use.",
    imageUrl: dashboardImage,
    liveProjectUrl: "https://germaines-personal-dashboard.netlify.app/",
    codeUrl: "https://github.com/GermaineDeNigris/personal-dashboard",
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'External APIs', 'Google Fonts']
  },
  'grocery-list': {
    id: 2,
    title: "Grocery List",
    shortDescription: "An interactive grocery list application that allows users to add and manage items in a shopping list.",
    fullDescription: "This Personal Dashboard is a dynamic, web-based interface designed to provide real-time information including cryptocurrency data, local weather, a digital clock, and a daily inspirational background. It utilizes various APIs to fetch real-time data, which makes it a practical tool for everyday use.",
    imageUrl: groceryListImage,
    liveProjectUrl: "https://germaines-grocery-list.netlify.app/",
    codeUrl: "https://github.com/GermaineDeNigris/Grocery-List",
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Google Fonts']
  }
  // ... more projects
};

export default projectDataDetail;