import {
  ACBUILDING_SITE_CONFIG_CODE_ENUM,
  ICloudflareImageResponse,
  SITE_CONFIG_CODE_ENUM,
} from "@encacap-group/common/dist/re";
import { ProductDataType, ProjectDataType, ServiceDataType } from "@interfaces/dataTypes";
import HomeCategory from "./Category/Category";
import HomeHero from "./Hero/Hero";
import HomeIntroduce from "./Introduce/Introduce";
import HomeProduct from "./Product/Product";
import HomeProject from "./Project/Project";
import HomeService from "./Service/Service";

export interface HomeProps {
  products: ProductDataType[];
  services: ServiceDataType[];
  projects: ProjectDataType[];
  siteConfig: Record<string, unknown>;
}

const Home = ({ siteConfig, products, services, projects }: HomeProps) => (
  <>
    <HomeHero data={siteConfig[SITE_CONFIG_CODE_ENUM.HOMEPAGE_SLIDER_IMAGE] as ICloudflareImageResponse[]} />
    <HomeCategory />
    <HomeIntroduce
      images={
        siteConfig[ACBUILDING_SITE_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE] as ICloudflareImageResponse[]
      }
    />
    <HomeProduct data={products} />
    <HomeService data={services} />
    <HomeProject data={projects} />
  </>
);

export default Home;
