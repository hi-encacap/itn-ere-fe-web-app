import { IconChevronRight } from "@components/Common/Icon";
import { ICategory } from "@encacap-group/types/dist/re";
import { getCategoryPageLink } from "@utils/helper";
import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ProductCategoryItem from "./ProductCategoryItem";

interface ProductCategoryProps {
  isCollapsed?: boolean;
  data: ICategory;
}

const ProductCategory = ({ isCollapsed: defaultIsCollapsed = false, data }: ProductCategoryProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsCollapsed(defaultIsCollapsed);
  }, [defaultIsCollapsed]);

  return (
    <div className="rounded-lg px-4 ring-2 ring-gray-200 md:px-5">
      <div
        className="flex cursor-pointer items-center justify-between py-4 md:py-5 md:font-semibold"
        onClick={handleToggleCollapse}
        role="button"
        tabIndex={0}
      >
        Danh mục sản phẩm
        <IconChevronRight className={twMerge("w-4", !isCollapsed && "rotate-90")} />
      </div>
      {!isCollapsed && (
        <div className="border-t-2 border-gray-200 py-3">
          {(data.children as ICategory[])?.map((item) => (
            <ProductCategoryItem name={item.name} href={getCategoryPageLink(item, data)} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
