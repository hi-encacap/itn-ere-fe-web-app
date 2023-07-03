import { IImageResponse } from "@encacap-group/common/dist/re";
import { RefObject, useEffect, useRef } from "react";
import { SwiperOptions } from "swiper";
import { register } from "swiper/element/bundle";
import HomeHeroSliderItem from "./HeroSliderItem";

interface HomeHeroProps {
  data: IImageResponse[];
}

const HomeHeroSlider = ({ data }: HomeHeroProps) => {
  const swiperRef = useRef<SwiperOptions>(null);

  useEffect(() => {
    register();
  }, []);

  useEffect(() => {
    const swiperBreakpoint = {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1.4,
      },
    };

    if (swiperRef.current) {
      const swiper = swiperRef.current;

      swiper.breakpoints = swiperBreakpoint;
      // @ts-ignore
      swiper.initialize();
    }
  }, []);

  return (
    <swiper-container
      slides-per-view="1.4"
      centered-slides
      space-between="12"
      loop
      autoplay
      ref={swiperRef as unknown as RefObject<HTMLDivElement>}
      init={false}
    >
      {data.map((item, index) => (
        <swiper-slide key={item.id}>
          <HomeHeroSliderItem data={item} isPriority={[0, 1, data.length].includes(index)} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default HomeHeroSlider;
