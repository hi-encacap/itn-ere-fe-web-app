import PostSidebarCollapsibleBlock from "@components/Common/PostSidebarCollapsibleBlock";
import { ICategory } from "@encacap-group/common/dist/re";
import { getCategoryPageLink } from "@utils/helper";
import ProductCategoryItem from "./ProductCategoryItem";

interface ProductCategoryProps {
  isCollapsed?: boolean;
  data: ICategory[];
}

const ProductCategory = ({ isCollapsed = false, data }: ProductCategoryProps) => (
  <PostSidebarCollapsibleBlock isCollapsed={isCollapsed} title="Danh mục sản phẩm" isResponsive={false}>
    <div className="border-t-2 border-gray-200 py-3 font-normal">
      {data?.map((item) => (
        <ProductCategoryItem name={item.name} href={getCategoryPageLink(item)} key={item.id} />
      ))}
    </div>
  </PostSidebarCollapsibleBlock>
);

export default ProductCategory;
