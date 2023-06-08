import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Product from "@components/Product/Product";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { useMemo } from "react";

interface ProductPageProps extends BasePageProps {
  category: ICategory;
  products: IPost[];
}

const ProductPage = ({ category, products, ...props }: ProductPageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`,
      },
    ],
    [category]
  );

  return (
    <CategoryLayout data={category} breadcrumbItems={breadcrumbItems} {...props}>
      <Product products={products} categories={category.children as ICategory[]} />
    </CategoryLayout>
  );
};

export const getServerSideProps = async () => {
  const [siteConfig, category, products] = await Promise.all([
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT),
    postService.getProducts(),
  ]);

  const head = { title: category.name };

  return {
    props: {
      head,
      siteConfig,
      category,
      products,
    },
  };
};

export default ProductPage;
