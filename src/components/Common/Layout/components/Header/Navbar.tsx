import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { twMerge } from "tailwind-merge";
import LayoutHeaderNavbarContainer from "./NavbarContainer";
import LayoutHeaderNavbarItem from "./NavbarItem";

interface LayoutHeaderNavbarProps {
  className?: string;
  onClick?: () => void;
}

const LayoutHeaderNavbar = ({ className, onClick }: LayoutHeaderNavbarProps) => (
  <div className={twMerge(className, "relative")} onClick={onClick} role="button" tabIndex={-1}>
    <LayoutHeaderNavbarContainer className="flex flex-col items-center overflow-clip overflow-x-auto overflow-y-hidden scrollbar-none md:flex-row md:space-x-7">
      <LayoutHeaderNavbarItem href="/">Trang chủ</LayoutHeaderNavbarItem>
      <LayoutHeaderNavbarItem href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`}>
        Sản phẩm
      </LayoutHeaderNavbarItem>
      <LayoutHeaderNavbarItem href={`/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`}>
        Dịch vụ
      </LayoutHeaderNavbarItem>
      <LayoutHeaderNavbarItem href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`}>
        Công trình thi công
      </LayoutHeaderNavbarItem>
    </LayoutHeaderNavbarContainer>
    <span className="background-[linear-gradient(to left, #000 10%, rgba(249, 249, 249, 0) 90%)] absolute inset-y-0 right-0 w-8" />
  </div>
);

export default LayoutHeaderNavbar;
