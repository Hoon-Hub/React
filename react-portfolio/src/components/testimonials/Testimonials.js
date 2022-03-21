import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Sanghoon1",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Liberoblanditiis minus dignissimos architecto aliquid provident amet odio    quia doloribus debitis ipsum eveniet vel praesentium enim quo    repellat, voluptatibus possimus cum.",
  },
  {
    avatar: AVTR2,
    name: "Sanghoon2",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Liberoblanditiis minus dignissimos architecto aliquid provident amet odio    quia doloribus debitis ipsum eveniet vel praesentium enim quo    repellat, voluptatibus possimus cum.",
  },
  {
    avatar: AVTR3,
    name: "Sanghoon3",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Liberoblanditiis minus dignissimos architecto aliquid provident amet odio    quia doloribus debitis ipsum eveniet vel praesentium enim quo    repellat, voluptatibus possimus cum.",
  },
  {
    avatar: AVTR4,
    name: "Sanghoon4",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Liberoblanditiis minus dignissimos architecto aliquid provident amet odio    quia doloribus debitis ipsum eveniet vel praesentium enim quo    repellat, voluptatibus possimus cum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        // install Swiper modules
        modules={Pagination}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
