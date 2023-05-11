import "@styles/swiper.scss";
import dynamic from "next/dynamic";
import HomeHeroSliderLoading from "./HeroSliderLoading";

const HomeHero = dynamic(() => import("./HeroSlider"), {
  ssr: false,
  loading: () => <HomeHeroSliderLoading />,
});

export default HomeHero;
