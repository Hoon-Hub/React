import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "image1 title",
    github: "https://github.com",
    demo: "https://naver.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "image2 title",
    github: "https://github.com",
    demo: "https://naver.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "image3 title",
    github: "https://github.com",
    demo: "https://naver.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "image4 title",
    github: "https://github.com",
    demo: "https://naver.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "image5 title",
    github: "https://github.com",
    demo: "https://naver.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "image6 title",
    github: "https://github.com",
    demo: "https://naver.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__items" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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