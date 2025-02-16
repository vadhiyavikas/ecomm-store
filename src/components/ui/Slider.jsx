import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Slider.css"

const Slider = ({ slides, options, setCategory }) => {

  const handleCategory = (type) => {
    setCategory(type);
  }

  return (
    <Splide options={options}>
      {slides.map((slide, index) => (
        <SplideSlide key={index} className="cursor-pointer" onClick={() => handleCategory(slide.type)}>
          <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} className="rounded-xl h-[70px] lg:h-[200px] w-full"/>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;

// Usage example:
// <Slider 
//   slides={[{ image: 'image1.jpg', alt: 'Image 1' }, { image: 'image2.jpg', alt: 'Image 2' }]} 
//   options={{ perPage: 1, autoplay: true, arrows: true }} 
// />
