"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const HeroCrousel = () => {
  const crouselImages = [
    { src: "/assets/images/hero-1.svg", name: "watch" },
    { src: "/assets/images/hero-2.svg", name: "bag" },
    { src: "/assets/images/hero-3.svg", name: "lamp" },
    { src: "/assets/images/hero-4.svg", name: "baken" },
    { src: "/assets/images/hero-5.svg", name: "chair" },
  ];
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {crouselImages.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width={484}
            height={484}
            alt={item.name}
          />
        ))}
      </Carousel>
      <div className="hidden lg:block absolute -bottom-40 -left-40">
        <Image
          src="/assets/icons/hand-drawn-arrow.svg"
          width={300}
          height={900}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default HeroCrousel;
