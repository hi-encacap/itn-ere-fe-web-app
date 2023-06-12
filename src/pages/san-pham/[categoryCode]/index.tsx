import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Product from "@components/Product/Product";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { getRequestURL } from "@utils/helper";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

interface ChildProductPageProps extends BasePageProps {
  category: ICategory;
  products: IPost[];
  categories: ICategory[];
}

const ChildProductPage = ({ category, products, categories, ...props }: ChildProductPageProps) => {
  const breadcrumbItems: Array<LayoutBreadcrumbItemType | boolean> = useMemo(
    () => [
      Boolean(category.parent) && {
        name: (category.parent as ICategory).name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`,
      },
      {
        name: category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}/${category.code}`,
      },
    ],
    [category]
  );

  return (
    <CategoryLayout data={category} breadcrumbItems={breadcrumbItems} {...props}>
      <Product products={products} categories={categories} />
    </CategoryLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const categoryCode = context.params?.categoryCode as string;

  const [siteConfig, category, products, categories] = await Promise.all([
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(categoryCode),
    postService.getProducts({ categoryCode, rootCategoryCode: undefined }),
    categoryService.getChildCategoryParentByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT),
  ]);

  const head = {
    title: category.name,
    requestURL: getRequestURL(context.req),
    description: category.parent ? `${category.name} - ${category.parent.name}` : category.name,
  };

  return {
    props: {
      head,
      siteConfig,
      category,
      products,
      categories,
    },
  };
};

export default ChildProductPage;
