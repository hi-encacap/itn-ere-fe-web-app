import {
  ACBUILDING_SITE_CONFIG_CODE_ENUM,
  ICategory,
  ICloudflareImageResponse,
  IPost,
  SITE_CONFIG_CODE_ENUM,
} from "@encacap-group/common/dist/re";
import HomeCategory from "./Category/Category";
import HomeHero from "./Hero/Hero";
import HomeIntroduce from "./Introduce/Introduce";
import HomeProduct from "./Product/Product";
import HomeProject from "./Project/Project";
import HomeService from "./Service/Service";

export interface HomeProps {
  products: IPost[];
  services: IPost[];
  projects: IPost[];
  featuredServices: IPost[];
  productCategory: ICategory;
  siteConfig: Record<string, unknown>;
  introducePost: IPost;
}

const Home = ({
  siteConfig,
  products,
  services,
  featuredServices,
  projects,
  productCategory,
  introducePost,
}: HomeProps) => (
  <>
    <HomeHero data={siteConfig[SITE_CONFIG_CODE_ENUM.HOMEPAGE_SLIDER_IMAGE] as ICloudflareImageResponse[]} />
    <HomeCategory services={featuredServices} productCategory={productCategory} />
    <HomeIntroduce
      images={
        siteConfig[ACBUILDING_SITE_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE] as ICloudflareImageResponse[]
      }
      data={introducePost}
    />
    <HomeProduct data={products} />
    <HomeService data={services} />
    <HomeProject data={projects} />
  </>
);

export default Home;
