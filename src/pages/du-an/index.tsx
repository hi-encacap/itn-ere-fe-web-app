import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Project, { ProjectProps } from "@components/Project/Project";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { useMemo } from "react";

interface ServicePageProps extends BasePageProps, ProjectProps {
  category: ICategory;
}

const ServicePage = ({
  category,
  projects,
  suggestedProducts,
  suggestedServices,
  ...props
}: ServicePageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`,
      },
    ],
    [category]
  );

  return (
    <CategoryLayout data={category} breadcrumbItems={breadcrumbItems} {...props}>
      <Project
        projects={projects}
        suggestedProducts={suggestedProducts}
        suggestedServices={suggestedServices}
      />
    </CategoryLayout>
  );
};

export const getServerSideProps = async () => {
  const [siteConfig, category, projects, suggestedProducts, suggestedServices] = await Promise.all([
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PROJECT),
    postService.getProjects(),
    postService.getProducts(),
    postService.getServices(),
  ]);

  const head = { title: category.name ?? "Hihi" };

  return {
    props: {
      head,
      siteConfig,
      category,
      projects,
      suggestedProducts,
      suggestedServices,
    },
  };
};

export default ServicePage;
