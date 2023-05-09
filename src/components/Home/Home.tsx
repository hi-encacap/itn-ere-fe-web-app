import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import HomeHero from "./Hero/Hero";
import HomeIntroduce from "./Introduce/Introduce";
import HomeService from "./Service/Service";

interface HomeProps {
  heroImages: ICloudflareImageResponse[];
}

const Home = ({ heroImages }: HomeProps) => (
  <>
    <HomeHero data={heroImages} />
    <HomeService />
    <HomeIntroduce images={heroImages} />
  </>
);

export default Home;
