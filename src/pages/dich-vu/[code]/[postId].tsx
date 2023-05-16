import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import ServiceDetail from "@components/Service/ServiceDetail";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProductDataType, ServiceDataType } from "@interfaces/dataTypes";
import { configService, productService, serviceService, websiteService } from "@services/index";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

interface ServiceDetailPageProps extends BasePageProps {
  service: ServiceDataType;
  services: ServiceDataType[];
  suggestedProducts: ProductDataType[];
}

const ServiceDetailPage = ({ service, services, suggestedProducts, ...props }: ServiceDetailPageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: service.category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`,
      },
    ],
    [service]
  );

  return (
    <CategoryLayout data={service.category} title={service.name} breadcrumbItems={breadcrumbItems} {...props}>
      <ServiceDetail data={service} services={services} suggestedProducts={suggestedProducts} />
    </CategoryLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const [website, siteConfig, service, services, suggestedProducts] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    serviceService.getServiceById(Number(context.params?.postId)),
    serviceService.getServices(),
    productService.getProducts(),
  ]);

  const head = { title: service.name };

  return {
    props: {
      head,
      website,
      siteConfig,
      service,
      services,
      suggestedProducts,
    },
  };
};

export default ServiceDetailPage;
