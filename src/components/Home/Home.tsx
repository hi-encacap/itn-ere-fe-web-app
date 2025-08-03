import {
  ACB_CONFIG_CODE_ENUM,
  ICategory,
  IImageResponse,
  IPost,
  IWebsiteConfig,
} from "@encacap-group/common/dist/re";
import HomeCategory from "./Category/Category";
import HomeHero from "./Hero/Hero";
import HomeIntroduce from "./Introduce/Introduce";
import HomeProduct from "./Product/Product";
import HomeProject from "./Project/Project";

export interface HomeProps {
  products: IPost[];
  projects: IPost[];
  categories: ICategory[];
  featuredServices: IPost[];
  homepageConfigs: IWebsiteConfig[];
}

const Home = ({ products, categories, projects, homepageConfigs }: HomeProps) => {
  const homepageHeroConfig = homepageConfigs.find(
    (config) => config.code === ACB_CONFIG_CODE_ENUM.HOMEPAGE_HERO_IMAGE
  );

  const homeIntroduceImageConfig = homepageConfigs.find(
    (config) => config.code === ACB_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE
  );
  const HomeIntroducePost = homepageConfigs.find(
    (config) => config.code === ACB_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_POST
  );

  return (
    <>
      {homepageHeroConfig && <HomeHero data={homepageHeroConfig.value as unknown as IImageResponse[]} />}
      <HomeCategory categories={categories} />
      {homeIntroduceImageConfig && HomeIntroducePost && (
        <HomeIntroduce
          images={homeIntroduceImageConfig.value as unknown as IImageResponse[]}
          data={HomeIntroducePost.value as unknown as IPost}
        />
      )}
      <HomeProduct data={products} />
      <HomeProject data={projects} />
    </>
  );
};

export default Home;
