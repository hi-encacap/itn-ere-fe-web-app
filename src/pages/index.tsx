import Layout from "@components/Common/Layout/Layout";
import Home, { HomeProps } from "@components/Home/Home";
import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { configService, productService, websiteService } from "@services/index";

interface MyIndexProps extends BasePageProps, HomeProps {
  heroImages: ICloudflareImageResponse[];
}

const MyIndex = (props: MyIndexProps) => (
  <Layout {...props}>
    <Home {...props} />
  </Layout>
);

export const getServerSideProps = async () => {
  const [website, siteConfig, heroImages, products] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    configService.getHeroImages(),
    productService.getProducts(),
  ]);

  const head = { title: "Trang chủ" };

  return {
    props: {
      head,
      website,
      siteConfig,
      heroImages,
      products,
    },
  };
};

export default MyIndex;
