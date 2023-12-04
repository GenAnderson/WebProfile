import "./Projects.styles.scss";
import { useInView } from "react-intersection-observer";

// bootstrap
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Projects = () => {
  const { ref: cardRef1, inView: visible1 } = useInView({
    triggerOnce: true,
  });
  const { ref: cardRef2, inView: visible2 } = useInView({
    triggerOnce: true,
  });
  const { ref: cardRef3, inView: visible3 } = useInView({
    triggerOnce: true,
  });
  const { ref: cardRef4, inView: visible4 } = useInView({
    triggerOnce: true,
  });
  const { ref: cardRef5, inView: visible5 } = useInView({
    triggerOnce: true,
  });
  const { ref: cardRef6, inView: visible6 } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="projects" className="ProjectsContainer container-fluid-md">
      <Card ref={cardRef1} className={`${visible1 ? "shiftUp" : ""}`}>
        <Card.Img src="pokedex.png"></Card.Img>
        <Card.Body>
          <Card.Title>Pokedex</Card.Title>

          <Card.Text>
            This app is a reimagined Pokédex, offering users the ability to
            explore and access detailed information about different Pokémon.
            Powered by an external API, it dynamically populates the app with
            comprehensive data on these creatures. This project marks one of my
            initial endeavors at Career Foundry, showcasing my early foray into
          </Card.Text>

          <div class="cardLinks">
            <Card.Link
              href="https://genanderson.github.io/pokedex/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Live link available</u>
            </Card.Link>
            <Card.Link
              href="https://github.com/GenAnderson/pokedex"
              target="_blank"
              rel="noreferrer"
            >
              <img src="whiteGitHub.png" alt="github icon" />
            </Card.Link>
          </div>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary">
              JS
            </Badge>
            <Badge pill bg="primary">
              CSS
            </Badge>
          </Stack>
        </Card.Body>
      </Card>

      <Card ref={cardRef2} className={`${visible2 ? "shiftUp" : ""}`}>
        <Card.Img src="Chatty.png"></Card.Img>
        <Card.Body>
          <Card.Title>Chatty</Card.Title>
          <Card.Text>
            Chatty is a messaging app that enables photo sharing and location
            sharing. Seamlessly optimized for Android and iOS, it leverages
            Firebase Storage & Authentication for secure, anonymous sign-ins.
            Created with React Native, this app incorporates a number of tools
            and libraries like React Native Maps and Gifted Chat.
          </Card.Text>
          <div class="cardLinks">
            <Card.Link href="#projects">
              <u>No link available</u>
            </Card.Link>
            <Card.Link
              href="https://github.com/GenAnderson/chat-demo"
              target="_blank"
              rel="noreferrer"
            >
              <img src="whiteGitHub.png" alt="github icon" />
            </Card.Link>
          </div>
          <Stack direction="horizontal" gap={2} className="row-auto">
            <Badge pill bg="primary" className="col-xs-auto">
              JS
            </Badge>
            <Badge pill bg="success" className="col-xs-auto">
              React Native
            </Badge>
            <Badge pill bg="success" className="col-xs-auto">
              Node.js
            </Badge>
            <Badge pill bg="secondary" className="col-xs-auto">
              Firestore
            </Badge>
            <Badge pill bg="secondary" className="col-xs-auto">
              Expo
            </Badge>
          </Stack>
        </Card.Body>
      </Card>

      <Card ref={cardRef3} className={`${visible3 ? "shiftUp" : ""}`}>
        <Card.Img src="MyFlix-client1.png"></Card.Img>
        <Card.Body>
          <Card.Title>MyFlix-React</Card.Title>
          <Card.Text>
            Join MyFlix by registering, signing in, and immediately begin
            creating your list of favorite movies. Create with React, this
            application serves as the front-end for an overall movie project,
            complemented by a back-end repository also accessible on my website.
          </Card.Text>
          <div class="cardLinks">
            <Card.Link
              href="https://bestmovielist.netlify.app/login"
              target="_blank"
              rel="noreferrer"
            >
              <u>Live link available</u>
            </Card.Link>
            <Card.Link
              href="https://github.com/GenAnderson/myFlix-client"
              target="_blank"
              rel="noreferrer"
            >
              <img src="whiteGitHub.png" alt="github icon" />
            </Card.Link>
          </div>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary">
              JS
            </Badge>
            <Badge pill bg="danger">
              SCSS
            </Badge>
            <Badge pill bg="success">
              React
            </Badge>
            <Badge pill bg="light" text="dark">
              Bootstrap
            </Badge>
          </Stack>
        </Card.Body>
      </Card>

      <Card ref={cardRef4} className={`${visible4 ? "shiftUp" : ""}`}>
        <Card.Img src="MovieApp2.png"></Card.Img>
        <Card.Body>
          <Card.Title>Movie API</Card.Title>
          <Card.Text>
            This robust REST API functions as the backbone for my front-end
            clients, catering to both the Angular and React versions of MyFlix
            applications. Leveraging the power of MongoDB, this API seamlessly
            handles the retrieval and updating of your personalized movie
            preferences stored within your profile.
          </Card.Text>
          <div class="cardLinks">
            <Card.Link
              href="https://movieapi-yazx.onrender.com/documentation.html"
              target="_blank"
              rel="noreferrer"
            >
              <u>Documentation link available</u>
            </Card.Link>
            <Card.Link
              href="https://github.com/GenAnderson/movieAPI"
              target="_blank"
              rel="noreferrer"
            >
              <img src="whiteGitHub.png" alt="github icon" />
            </Card.Link>
          </div>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="success">
              React
            </Badge>
            <Badge pill bg="success">
              Node.js
            </Badge>
            <Badge pill bg="light" text="dark">
              Express
            </Badge>
            <Badge pill bg="secondary">
              MongoDB
            </Badge>
          </Stack>
        </Card.Body>
      </Card>

      <Card ref={cardRef5} className={`${visible5 ? "shiftUp" : ""}`}>
        <Card.Img src="CityMeet.png"></Card.Img>
        <Card.Body>
          <Card.Title>CityMeet</Card.Title>
          <Card.Text>
            CityMeet is a dynamic platform designed to curate and showcase an
            array of events within your chosen city, sourcing the information
            through the Google Calendar API. It offers users the flexibility to
            tailor their event exploration by applying filters based on city
            preferences or desired event quantity.
          </Card.Text>
          <div class="cardLinks">
            <Card.Link
              href="https://genanderson.github.io/citymeet/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Live link available</u>
            </Card.Link>
            <Card.Link
              href="https://github.com/GenAnderson/citymeet"
              target="_blank"
              rel="noreferrer"
            >
              <img src="whiteGitHub.png" alt="github icon" />
            </Card.Link>
          </div>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary">
              JS
            </Badge>
            <Badge pill bg="success">
              React
            </Badge>
            <Badge pill bg="light" text="dark">
              Bootstrap
            </Badge>
            <Badge pill bg="secondary">
              Jest
            </Badge>
            <Badge pill bg="secondary">
              Cucumber
            </Badge>
          </Stack>
        </Card.Body>
      </Card>

      <Card ref={cardRef6} className={`${visible6 ? "shiftUp" : ""}`}>
        <Card.Img src="MyFlix-angular1.png"></Card.Img>
        <Card.Body>
          <Card.Title>Myflix-Angular</Card.Title>
          <Card.Text>
            The development of this iteration of MyFlix used Angular. Similar to
            its React counterpart, this rendition seamlessly integrates with my
            backend movie API. Crafting this version served as an invaluable
            opportunity to delve deeper into Angular and provided a hands-on
            learning experience while honing skills.
          </Card.Text>
          <div class="cardLinks">
            <Card.Link
              href="https://genanderson.github.io/myFlix-Angular/welcome"
              target="_blank"
              rel="noreferrer"
            >
              <u>Live link available</u>
            </Card.Link>
            <Card.Link
              href="https://github.com/GenAnderson/myFlix-Angular"
              target="_blank"
              rel="noreferrer"
            >
              <img src="whiteGitHub.png" alt="github icon" />
            </Card.Link>
          </div>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary">
              Typescript
            </Badge>
            <Badge pill bg="success">
              Angular
            </Badge>
            <Badge pill bg="danger">
              SCSS
            </Badge>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
