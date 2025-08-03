import Layout from "@components/Common/Layout/Layout";
import Home, { HomeProps } from "@components/Home/Home";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { getRequestURL } from "@utils/helper";
import { GetServerSideProps } from "next";

const MyIndex = (props: BasePageProps & HomeProps) => (
  <Layout {...props}>
    <Home {...props} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log(
    "getServerSideProps",
    process.env.NEXT_PUBLIC_RE_ACB_API_URL,
    process.env.NEXT_PUBLIC_RE_ACB_API_KEY
  );

  const [websiteConfig, homepageConfigs, products, categories, featuredServices, projects] =
    await Promise.all([
      configService.getCommonWebsiteConfig(),
      configService.getHomepageConfigs(),
      postService.getProducts({ limit: 6 }),
      categoryService.getRootCategories({ expands: ["avatar"] }),
      postService.getFeaturedPosts(),
      postService.getProjects(),
    ]);

  const head = {
    title: "Trang chủ",
    requestURL: getRequestURL(req),
    description: websiteConfig.website.description,
  };

  return {
    props: {
      head,
      websiteConfig,
      homepageConfigs,
      products,
      categories,
      featuredServices,
      projects,
    },
  };
};

export default MyIndex;
