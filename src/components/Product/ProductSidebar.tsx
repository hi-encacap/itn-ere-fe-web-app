import Contact from "@components/Common/Contact/Contact";
import Search from "@components/Common/Search/Search";
import { ICategory, IContact } from "@encacap-group/types/dist/re";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ProductCategory from "./ProductCategory";

interface ProductSidebarProps extends HTMLAttributes<HTMLDivElement> {
  isSidebarCollapsed?: boolean;
  category: ICategory;
  contact?: IContact;
}

const ProductSidebar = ({ isSidebarCollapsed, className, category, contact }: ProductSidebarProps) => (
  <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
    {contact && <Contact data={contact} />}
    <Search />
    <ProductCategory isCollapsed={isSidebarCollapsed} data={category} />
  </div>
);

export default ProductSidebar;
