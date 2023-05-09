import Layout from "@components/Common/Layout/Layout";
import Home from "@components/Home/Home";
import { BasePageProps } from "@interfaces/baseTypes";
import { configService, websiteService } from "@services/index";

const MyIndex = (props: BasePageProps) => (
  <Layout {...props}>
    <Home {...props} />
  </Layout>
);

export const getServerSideProps = async () => {
  const [website, siteConfig, heroImages] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    configService.getHeroImages(),
  ]);

  const head = { title: "Trang chủ" };

  return {
    props: {
      head,
      website,
      siteConfig,
      heroImages,
    },
  };
};

export default MyIndex;
