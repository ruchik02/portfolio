import React from "react";
import "./portfolio.css";
import PORT1 from "../../assets/port.png";
import PORT2 from "../../assets/a.jpg";
import PORT3 from "../../assets/myspitify.png";
import PORT4 from "../../assets/weather.png";
import PORT5 from "../../assets/greeting.jpg";
import PORT6 from "../../assets/slot.jpg";

const data = [
  {
    id: 1,
    image: PORT1,
    title: "Guessing Game",
    github: "https://github.com/ruchik02/Guessing_game",
    demo: "https://guessing-game-using-js.netlify.app",
  },
  {
    id: 2,
    image: PORT2,
    title: "Hospital Website",
    github: "https://github.com/ruchik02/Hospital-website",
    demo: "https://hospital-project01.netlify.app",
  },
  {
    id: 3,
    image: PORT3,
    title: "Spotify Clone",
    github: "https://github.com/ruchik02/spotify-clone",
    demo: "https://spotify-clone-html-css-js.netlify.app",
  },
  {
    id: 4,
    image: PORT4,
    title: "Weather App",
    github: "https://github.com/ruchik02/weather-app-using-js-api",
    demo: "https://weather-app-api-javascript.netlify.app",
  },
  {
    id: 5,
    image: PORT5,
    title: "Greeting app",
    github: "https://github.com/ruchik02/Greeting",
    demo: "https://greeting-react.netlify.app",
  },
  {
    id: 6,
    image: PORT6,
    title: "Slot Game",
    github: "https://github.com/ruchik02/slot-game",
    demo: "https://slot-game-react.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
