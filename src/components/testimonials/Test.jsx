import React from "react";
import "./test.css";
// import AV1 from "../../assets/av1.jpg";
// import AV2 from "../../assets/av2.jpg";
// import AV3 from "../../assets/avatar1.jpg";
// import AV4 from "../../assets/av6.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    // avatar: AV1,
    name: "High School",
    review:
      " During the academic year 2016-2017, I successfully completed my 10th-grade education at SD Public School. I proudly achieved a CGPA of 7.4, reflecting my consistent dedication to my studies.",
  },
  {
    // avatar: AV2,
    name: "Higher Secondary Education",
    review:
      "During the academic year 2018-2019, I pursued the non-medical stream at S.D. Public School, and achieved an outstanding overall percentage of 89%. Notably, I excelled in Mathematics, demonstrating proficiency and a strong understanding of the subject. This educational experience not only solidified my foundation in core subjects but also fueled my passion for mathematics and logical reasoning.",
  },
  {
    // avatar: AV3,
    name: "Bachelor of Engineering in Computer Science",
    review:
      "I pursued my Bachelor of Engineering in Computer Science at Chitkara University, Himachal Pradesh, from 2019 to 2023. I have maintained a stellar CGPA of 9.74, showcasing my commitment to academic excellence and a profound understanding of the subject matter.",
  },
  // {
  //   // avatar: AV4,
  //   name: "Ritika Garg",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium veritatis dicta libero illum eaque aliquam assumendarepudiandae vel ea nesciunt explicabo in dignissimos ipsam cumqueprovident eveniet odio labore",
  // },
];
const Testimonoials = () => {
  return (
    <section id="testimonials">
      <h5>Where from </h5>
      <h2>Education</h2>
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
              {/* <div className="client_avatar">
                <img src={avatar} alt="avatar one" />
              </div> */}
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
