import Contact from "@components/Common/Contact/Contact";
import Search from "@components/Common/Search/Search";
import { ICategory } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ProductCategory from "./ProductCategory";

interface ProductSidebarProps extends HTMLAttributes<HTMLDivElement> {
  isSidebarCollapsed?: boolean;
  categories: ICategory[];
  siteConfig: SiteConfigDataType;
}

const ProductSidebar = ({ isSidebarCollapsed, className, siteConfig, categories }: ProductSidebarProps) => (
  <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
    {siteConfig && <Contact data={siteConfig} />}
    <Search />
    <ProductCategory isCollapsed={isSidebarCollapsed} data={categories} />
  </div>
);

export default ProductSidebar;
