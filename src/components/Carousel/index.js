import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Scrollbar,
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Scrollbar]);

export default function Carousel(props) {
  const showChildren = () => props.gardens.map((garden) => (
      <SwiperSlide id={garden.firebaseKey} key={garden.firebaseKey}> {props.children}</SwiperSlide>));

  const myGarden = props.gardens.map((garden) => garden.firebaseKey);

  console.warn(showChildren());

  return (
    <Swiper
      id={myGarden[0]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => ('slide change')}
      onSwiper={(swiper) => (swiper)}
    >
        {showChildren()}
      {/* <SwiperSlide id={myGarden} >{props.children}</SwiperSlide> */}
      ...
    </Swiper>
  );
}
