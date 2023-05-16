import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Product from "@components/Product/Product";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory } from "@encacap-group/types/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProductDataType } from "@interfaces/dataTypes";
import { categoryService, configService, productService, websiteService } from "@services/index";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

interface ChildProductPageProps extends BasePageProps {
  category: ICategory;
  products: ProductDataType[];
}

const ChildProductPage = ({ category, products, ...props }: ChildProductPageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
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
      <Product category={category} products={products} />
    </CategoryLayout>
  );
};

export const getServerSideProps = async (content: GetServerSidePropsContext) => {
  const [website, siteConfig, category, products, categories] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(content.params?.categoryCode as string),
    productService.getProducts(),
    categoryService.getChildCategoryParentByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT),
  ]);

  const head = { title: category.name };

  return {
    props: {
      head,
      website,
      siteConfig,
      category: {
        ...category,
        children: categories ?? [],
      },
      products: products.map((item) => ({
        ...item,
        category,
      })),
      categories,
    },
  };
};

export default ChildProductPage;
