import React from "react";
import "./test.css";
import AV1 from "../../assets/av1.jpg";
import AV2 from "../../assets/av2.jpg";
import AV3 from "../../assets/avatar1.jpg";
import AV4 from "../../assets/av6.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AV1,
    name: "Gourav Seghal",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium veritatis dicta libero illum eaque aliquam assumendarepudiandae vel ea nesciunt explicabo in dignissimos ipsam cumqueprovident eveniet odio labore",
  },
  {
    avatar: AV2,
    name: "Aditi Goel",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium veritatis dicta libero illum eaque aliquam assumendarepudiandae vel ea nesciunt explicabo in dignissimos ipsam cumqueprovident eveniet odio labore",
  },
  {
    avatar: AV3,
    name: "Payal Sharma",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium veritatis dicta libero illum eaque aliquam assumendarepudiandae vel ea nesciunt explicabo in dignissimos ipsam cumqueprovident eveniet odio labore",
  },
  {
    avatar: AV4,
    name: "Ritika Garg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium veritatis dicta libero illum eaque aliquam assumendarepudiandae vel ea nesciunt explicabo in dignissimos ipsam cumqueprovident eveniet odio labore",
  },
];
const Testimonoials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review"> {review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonoials;
