import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import HomeHero from "./Hero/Hero";

interface HomeProps {
  heroImages: ICloudflareImageResponse[];
}

const Home = ({ heroImages }: HomeProps) => (
  <>
    <HomeHero data={heroImages} />
    <div>Home</div>
  </>
);

export default Home;
