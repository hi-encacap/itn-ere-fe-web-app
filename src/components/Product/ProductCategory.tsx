import PostSidebarCollapsibleBlock from "@components/Common/PostSidebarCollapsibleBlock";
import { ICategory } from "@encacap-group/types/dist/re";
import { getCategoryPageLink } from "@utils/helper";
import ProductCategoryItem from "./ProductCategoryItem";

interface ProductCategoryProps {
  isCollapsed?: boolean;
  data: ICategory;
}

const ProductCategory = ({ isCollapsed = false, data }: ProductCategoryProps) => (
  <PostSidebarCollapsibleBlock isCollapsed={isCollapsed} title="Danh mục sản phẩm">
    <div className="border-t-2 border-gray-200 py-3">
      {(data.children as ICategory[])?.map((item) => (
        <ProductCategoryItem name={item.name} href={getCategoryPageLink(item, data)} key={item.id} />
      ))}
    </div>
  </PostSidebarCollapsibleBlock>
);

export default ProductCategory;
