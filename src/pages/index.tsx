import Layout from "@components/Common/Layout/Layout";
import Home, { HomeProps } from "@components/Home/Home";
import { BasePageProps } from "@interfaces/baseTypes";
import {
  configService,
  productService,
  projectService,
  serviceService,
  websiteService,
} from "@services/index";

const MyIndex = (props: BasePageProps & HomeProps) => (
  <Layout {...props}>
    <Home {...props} />
  </Layout>
);

export const getServerSideProps = async () => {
  const [website, siteConfig, products, services, projects] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    productService.getProducts(),
    serviceService.getServices(),
    projectService.getProjects(),
  ]);

  const head = { title: "Trang chủ" };

  return {
    props: {
      head,
      website,
      siteConfig,
      products,
      services,
      projects,
    },
  };
};

export default MyIndex;
