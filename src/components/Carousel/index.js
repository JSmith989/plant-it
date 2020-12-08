import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = props.gardens;

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
      <CarouselItem
        className="carouselContent"
        tag="div"
        key={item.firebaseKey}

      >
          <Link to={`/gardens/${item.firebaseKey}`}>
      <img className='card-img-top border border-white' src={item.image} alt='Card cap' />
        </Link>
          <CarouselCaption className="carouselText" captionText={item.name}/>
      </CarouselItem>
  ));

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
