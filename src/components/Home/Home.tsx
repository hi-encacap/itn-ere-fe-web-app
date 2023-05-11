import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import { ProductDataType, ProjectDataType, ServiceDataType } from "@interfaces/dataTypes";
import HomeCategory from "./Category/Category";
import HomeHero from "./Hero/Hero";
import HomeIntroduce from "./Introduce/Introduce";
import HomeProduct from "./Product/Product";
import HomeProject from "./Project/Project";
import HomeService from "./Service/Service";

export interface HomeProps {
  heroImages: ICloudflareImageResponse[];
  products: ProductDataType[];
  services: ServiceDataType[];
  projects: ProjectDataType[];
}

const Home = ({ heroImages, products, services, projects }: HomeProps) => (
  <>
    <HomeHero data={heroImages} />
    <HomeCategory />
    <HomeIntroduce images={heroImages} />
    <HomeProduct data={products} />
    <HomeService data={services} />
    <HomeProject data={projects} />
  </>
);

export default Home;
