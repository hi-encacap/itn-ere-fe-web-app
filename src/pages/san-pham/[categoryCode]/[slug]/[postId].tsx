import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import ProductDetail from "@components/Product/ProductDetail";
import { ICategory } from "@encacap-group/types/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProductDataType } from "@interfaces/dataTypes";
import { configService, productService } from "@services/index";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

interface ProductDetailPageProps extends BasePageProps {
  product: ProductDataType;
  relatedProducts: ProductDataType[];
}

const ProductDetailPage = ({ product, relatedProducts, ...props }: ProductDetailPageProps) => {
  const { category } = product;
  const parentCategory = category.parent as ICategory;

  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: parentCategory.name,
        href: `/${parentCategory.code}`,
      },
      {
        name: category.name,
        href: `/${parentCategory.code}/${category.code}`,
      },
    ],
    [category.code, category.name, parentCategory.code, parentCategory.name]
  );

  return (
    <CategoryLayout data={product} breadcrumbItems={breadcrumbItems} {...props}>
      <ProductDetail data={product} relatedProducts={relatedProducts} />
    </CategoryLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const [siteConfig, product, relatedProducts] = await Promise.all([
    configService.getSiteConfig(),
    productService.getProductById(Number(context.params?.postId)),
    productService.getProducts(),
  ]);

  const head = { title: product.name };

  return {
    props: {
      head,
      siteConfig,
      product,
      relatedProducts,
    },
  };
};

export default ProductDetailPage;
