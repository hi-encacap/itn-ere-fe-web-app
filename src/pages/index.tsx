import Layout from "@components/Common/Layout/Layout";
import Home, { HomeProps } from "@components/Home/Home";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService, serviceService } from "@services/index";
import { getRequestURL } from "@utils/helper";
import { decode } from "html-entities";
import { GetServerSideProps } from "next";
import striptags from "striptags";

const MyIndex = (props: BasePageProps & HomeProps) => (
  <Layout {...props}>
    <Home {...props} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const [siteConfig, products, services, featuredServices, projects, productCategory, introducePost] =
    await Promise.all([
      configService.getSiteConfig(),
      postService.getProducts({ limit: 6 }),
      postService.getServices(),
      serviceService.getFeaturedServices(),
      postService.getProjects(),
      categoryService.getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT),
      postService.getPostById(4),
    ]);

  const description = decode(striptags(introducePost.content));

  const head = {
    title: "Trang chủ",
    requestURL: getRequestURL(req),
    description: description.substring(0, description.indexOf("giới thiệu", 100) + 10),
  };

  return {
    props: {
      head,
      siteConfig,
      products,
      services,
      featuredServices,
      projects,
      productCategory,
      introducePost,
    },
  };
};

export default MyIndex;
