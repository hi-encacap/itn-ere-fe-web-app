import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import HomeHeroSliderItem from "./HeroSliderItem";

interface HomeHeroProps {
  data: ICloudflareImageResponse[];
}

const HomeHeroSlider = ({ data }: HomeHeroProps) => {
  const swiperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    register();
  }, []);

  return (
    <swiper-container slides-per-view="1.4" centered-slides space-between="12" loop autoplay ref={swiperRef}>
      {data.map((item, index) => (
        <swiper-slide key={item.id}>
          <HomeHeroSliderItem data={item} isPriority={[0, 1, data.length].includes(index)} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default HomeHeroSlider;
