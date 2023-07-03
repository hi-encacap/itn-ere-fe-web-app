import PostLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import ServiceDetail from "@components/Service/ServiceDetail";
import { ACBUILDING_CATEGORY_CODE_ENUM, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { configService, postService } from "@services/index";
import { getRequestURL } from "@utils/helper";
import { decode } from "html-entities";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";
import striptags from "striptags";

interface ServiceDetailPageProps extends BasePageProps {
  service: IPost;
  services: IPost[];
  suggestedProducts: IPost[];
}

const ServiceDetailPage = ({
  service,
  services,
  suggestedProducts,
  websiteConfig: siteConfig,
  ...props
}: ServiceDetailPageProps) => {
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
    <PostLayout
      data={service.category}
      title={service.title}
      breadcrumbItems={breadcrumbItems}
      websiteConfig={siteConfig}
      {...props}
    >
      <ServiceDetail
        data={service}
        services={services}
        suggestedProducts={suggestedProducts}
        siteConfig={siteConfig}
      />
    </PostLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const [siteConfig, service, services, suggestedProducts] = await Promise.all([
    configService.getSiteConfig(),
    postService.getPostById(Number(context.params?.postId)),
    postService.getServices(),
    postService.getProducts({ limit: 5 }),
  ]);

  const head = {
    title: service.title,
    requestURL: getRequestURL(context.req),
    description: decode(striptags(service.content)).substring(0, 150),
  };

  return {
    props: {
      head,
      siteConfig,
      service,
      services,
      suggestedProducts,
    },
  };
};

export default ServiceDetailPage;
