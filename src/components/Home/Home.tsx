import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import HomeHero from "./Hero/Hero";
import HomeIntroduce from "./Introduce/Introduce";
import HomeProduct from "./Product/Product";
import HomeService from "./Service/Service";

export interface HomeProps {
  heroImages: ICloudflareImageResponse[];
  products: ProductDataType[];
}

const Home = ({ heroImages, products }: HomeProps) => (
  <>
    <HomeHero data={heroImages} />
    <HomeService />
    <HomeIntroduce images={heroImages} />
    <HomeProduct data={products} />
  </>
);

export default Home;
