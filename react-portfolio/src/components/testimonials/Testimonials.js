import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    id: 1,
    image: AVTR1,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            blanditiis minus dignissimos architecto aliquid provident amet odio
            quia doloribus debitis ipsum eveniet vel praesentium enim quo
            repellat, voluptatibus possimus cum.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            blanditiis minus dignissimos architecto aliquid provident amet odio
            quia doloribus debitis ipsum eveniet vel praesentium enim quo
            repellat, voluptatibus possimus cum.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            blanditiis minus dignissimos architecto aliquid provident amet odio
            quia doloribus debitis ipsum eveniet vel praesentium enim quo
            repellat, voluptatibus possimus cum.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
