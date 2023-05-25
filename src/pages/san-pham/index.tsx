import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import Product from "@components/Product/Product";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProductDataType } from "@interfaces/dataTypes";
import { categoryService, configService, productService, websiteService } from "@services/index";
import { sample } from "lodash";
import { useMemo } from "react";

interface ProductPageProps extends BasePageProps {
  category: ICategory;
  products: ProductDataType[];
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
      <Product products={products} category={category} />
    </CategoryLayout>
  );
};

export const getServerSideProps = async () => {
  const [website, siteConfig, category, products] = await Promise.all([
    websiteService.getMyWebsite(),
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT),
    productService.getProducts(),
  ]);

  const head = { title: category.name };

  return {
    props: {
      head,
      website,
      siteConfig,
      category,
      products: products.map((item) => ({
        ...item,
        category: sample(category.children),
      })),
    },
  };
};

export default ProductPage;
