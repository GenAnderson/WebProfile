const projectsData = [
  {
    id: 1,
    name: "Ralph Inouye Co., Ltd - original",
    img: require("../images/rsiOriginal.png"),
    desc: "Ralph Inouye is a General Contractor in Hawaii. Constructed with HTML5 and vanilla Javascript, this application is a heavy hitter in the SCSS department due to its diverse use of flex and CSS grid functionalities. It includes a persistent navigation system coupled with a slide-in menu, an automated slideshow feature, and selective lazy loading for images.",
    stack: ["SCSS", "JS"],
    link: "https://www.rsinouye.com/",
  },
  {
    id: 2,
    name: "Chatty",
    img: require("../images/Chatty.png"),
    desc: `Chatty is a messaging app that enables photo sharing and
    location sharing. Seamlessly optimized for Android and iOS, it
    leverages Firebase Storage & Authentication for secure,
    anonymous sign-ins. Created with React Native, this app
    incorporates a number of tools and libraries like React Native
    Maps and Gifted Chat.`,
    stack: ["React Native", "Node.js", "Firestore", "Expo"],
    link: "https://github.com/GenAnderson/chat-demo",
  },
  {
    id: 3,
    name: "MyFlix-React",
    img: require("../images/MyFlix-client1.png"),
    desc: `Join MyFlix by registering, signing in, and immediately begin
    creating your list of favorite movies. Create with React, this
    application serves as the front-end for an overall movie
    project, complimented by a back-end repository also accessible
    on my website.`,
    stack: ["SCSS", "React", "Bootstrap"],
    link: "https://bestmovielist.netlify.app/login",
  },
  {
    id: 4,
    name: "Movie API",
    img: require("../images/MovieApp2.png"),
    desc: `This robust REST API functions as the backbone for my front-end
    clients, catering to both the Angular and React versions of
    MyFlix applications. Leveraging the power of MongoDB, this API
    seamlessly handles the retrieval and updating of your
    personalized movie preferences stored within your profile.`,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/GenAnderson/movieAPI",
  },
  {
    id: 5,
    name: "CityMeet",
    img: require("../images/CityMeet.png"),
    desc: `CityMeet is a dynamic platform designed to curate and showcase
  an array of events within your chosen city, sourcing the
  information through the Google Calendar API. It offers users the
  flexibility to tailor their event exploration by applying
  filters based on city preferences or desired event quantity.`,
    stack: ["React", "Bootstrap", "Jest", "Cucumber"],
    link: "https://github.com/GenAnderson/citymeet",
  },
  {
    id: 6,
    name: "MyFlix-Angular",
    img: require("../images/MyFlix-angular1.png"),
    desc: `The development of this iteration of MyFlix used Angular.
    Similar to its React counterpart, this rendition seamlessly
    integrates with my backend movie API. Crafting this version
    served as an invaluable opportunity to delve deeper into Angular
    and provided a hands-on learning experience while honing skills.`,
    stack: ["Angular", "Typescript", "SCSS"],
    link: "https://genanderson.github.io/myFlix-Angular/welcome",
  },
];

export default projectsData;
