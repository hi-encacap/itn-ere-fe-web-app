import { ICategory } from "@encacap-group/common/dist/re";
import { twMerge } from "tailwind-merge";
import LayoutHeaderNavbarContainer from "./NavbarContainer";
import LayoutHeaderNavbarItem from "./NavbarItem";

interface LayoutHeaderNavbarProps {
  className?: string;
  categories?: ICategory[];
  onClick?: VoidFunction;
}

const LayoutHeaderNavbar = ({ className, onClick, categories }: LayoutHeaderNavbarProps) => (
  <div className={twMerge("relative", className)} onClick={onClick} role="button" tabIndex={-1}>
    <LayoutHeaderNavbarContainer className="flex flex-col items-center overflow-clip overflow-x-auto overflow-y-hidden scrollbar-none md:flex-row md:space-x-7">
      <LayoutHeaderNavbarItem href="/">Trang chủ</LayoutHeaderNavbarItem>
      {!!categories?.length &&
        categories.map((category) => (
          <LayoutHeaderNavbarItem key={category.code} href={`/${category.code}`}>
            {category.name}
          </LayoutHeaderNavbarItem>
        ))}
    </LayoutHeaderNavbarContainer>
    <span className="background-[linear-gradient(to left, #000 10%, rgba(249, 249, 249, 0) 90%)] absolute inset-y-0 right-0 w-8" />
  </div>
);

export default LayoutHeaderNavbar;
