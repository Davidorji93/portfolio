import React from 'react'
import './styles.css'
import AVATAR from '../../assets/SAM.jpg'
import AVATAR1 from '../../assets/testimonials3.jpeg'
import AVATAR2 from '../../assets/team4.jpeg'
import AVATAR3 from '../../assets/lilian.jpg'
// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
   <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       className="container testimonial__container">
      <SwiperSlide className="testimonial">
      <div className="client__avatar">
        <img src={AVATAR} alt="" />
      </div>
      <h5 className='client__name'>Samuel Orji</h5>
        <small className='client__review'>
        David has been supporting our business  in both the creation and implementation of new and tailored software. We have worked with him and cannot speak highly enough of him. He is reliable, thorough, smart, available, extremely good communicators and very friendly! We would recommend hiring David to anyone looking for a highly productive and solution driven team. We plan to continue to work with him for the long term
        </small>
    </SwiperSlide>

    <SwiperSlide className="testimonial">
      <div className="client__avatar">
        <img src={AVATAR1} alt="" />
      </div>
      <h5 className='client__name'>Yetunde Williams</h5>
        <small className='client__review'>
        I believe, any engineer should be able to understand the requirements, deliver on time, deliver according to the requirements. With David we have found out that  he  can provide all three. It’s a great team with excellent communication skills that made a difference in our business.
        </small>
    </SwiperSlide>

    <SwiperSlide className="testimonial">
      <div className="client__avatar">
        <img src={AVATAR2} alt="" />
      </div>
      <h5 className='client__name'>Lambart Marshall</h5>
        <small className='client__review'>
        I have had the pleasure of working with David on various projects including both frontend and backend development of application. He brought together great people, including excellent project and account management leadership. David technical talent was fantastic and worked well with our scrum teams and helped us to deliver consistent results. He was always helpful and accommodating to our schedules and deadlines. I highly recommend David for your next software development engagement.
        </small>
    </SwiperSlide>

    <SwiperSlide className="testimonial">
      <div className="client__avatar">
        <img src={AVATAR3} alt="" />
      </div>
      <h5 className='client__name'>Lilian David</h5>
        <small className='client__review'>
        David has impressed me with his attention to how the business is supposed to work and how the user experience he suggest aligns with our strategic goals. Our communication started with elaborate interviews that synchronized our vision. Once it came to design, he delivered stellar results and always contributed their own expertise to the final product. I am happy to work with David and would recommend him for challenging design and business analysis projects.
        </small>
    </SwiperSlide>
    </Swiper>
   </section>
// http://passng-app.herokuapp.com/
  )
}

export default Testimonial
