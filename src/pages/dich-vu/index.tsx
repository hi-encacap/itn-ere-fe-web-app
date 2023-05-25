import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Service from "@components/Service/Service";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProductDataType, ServiceDataType } from "@interfaces/dataTypes";
import {
  categoryService,
  configService,
  productService,
  serviceService,
  websiteService,
} from "@services/index";
import { useMemo } from "react";

interface ServicePageProps extends BasePageProps {
  category: ICategory;
  services: ServiceDataType[];
  suggestedProducts: ProductDataType[];
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

export const getServerSideProps = async () => {
  const [website, siteConfig, category, services, suggestedProducts] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.SERVICE),
    serviceService.getServices(),
    productService.getProducts(),
  ]);

  const head = { title: category.name };

  return {
    props: {
      head,
      website,
      siteConfig,
      category,
      services,
      suggestedProducts,
    },
  };
};

export default ServicePage;
