import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Service from "@components/Service/Service";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { getRequestURL } from "@utils/helper";
import { GetServerSideProps } from "next";
import { useMemo } from "react";

interface ServicePageProps extends BasePageProps {
  category: ICategory;
  services: IPost[];
  suggestedProducts: IPost[];
}

const ServicePage = ({ category, services, suggestedProducts, ...props }: ServicePageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`,
      },
    ],
    [category]
  );

  return (
    <CategoryLayout data={category} breadcrumbItems={breadcrumbItems} {...props}>
      <Service services={services} suggestedProducts={suggestedProducts} />
    </CategoryLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const [siteConfig, category, services, suggestedProducts] = await Promise.all([
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.SERVICE),
    postService.getServices(),
    postService.getProducts(),
  ]);

  const head = { title: category.name, requestURL: getRequestURL(req), description: category.name };

  return {
    props: {
      head,
      siteConfig,
      category,
      services,
      suggestedProducts,
    },
  };
};

export default ServicePage;
