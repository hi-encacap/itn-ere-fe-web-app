import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import { ProjectProps } from "@components/Project/Project";
import ProjectDetail from "@components/Project/ProjectDetail";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProjectDataType } from "@interfaces/dataTypes";
import {
  configService,
  productService,
  projectService,
  serviceService,
  websiteService,
} from "@services/index";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

interface ServicePageProps extends BasePageProps, ProjectProps {
  project: ProjectDataType;
}

const ServicePage = ({
  project,
  projects,
  suggestedProducts,
  suggestedServices,
  ...props
}: ServicePageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: project.category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`,
      },
    ],
    [project]
  );

  return (
    <CategoryLayout data={project.category} title={project.name} breadcrumbItems={breadcrumbItems} {...props}>
      <ProjectDetail
        data={project}
        projects={projects}
        suggestedProducts={suggestedProducts}
        suggestedServices={suggestedServices}
      />
    </CategoryLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const [website, siteConfig, projects, suggestedProducts, suggestedServices, project] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    projectService.getProjects(),
    productService.getProducts(),
    serviceService.getServices(),
    projectService.getProjectById(Number(context.params?.postId)),
  ]);

  const head = { title: project.name };

  return {
    props: {
      head,
      website,
      siteConfig,
      project,
      projects,
      suggestedProducts,
      suggestedServices,
    },
  };
};

export default ServicePage;
