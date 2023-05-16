import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { twMerge } from "tailwind-merge";
import LayoutHeaderNavbarContainer from "./NavbarContainer";
import LayoutHeaderNavbarItem from "./NavbarItem";

interface LayoutHeaderNavbarProps {
  className?: string;
}

const LayoutHeaderNavbar = ({ className }: LayoutHeaderNavbarProps) => (
  <div className={twMerge(className, "relative")}>
    <LayoutHeaderNavbarContainer className="flex items-center space-x-7 overflow-clip overflow-x-auto overflow-y-hidden scrollbar-none">
      <LayoutHeaderNavbarItem href="/">Trang chủ</LayoutHeaderNavbarItem>
      <LayoutHeaderNavbarItem href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`}>
        Sản phẩm
      </LayoutHeaderNavbarItem>
      <LayoutHeaderNavbarItem href="/dich-vu">Dịch vụ</LayoutHeaderNavbarItem>
      <LayoutHeaderNavbarItem href="/cong-trinh-thi-cong">Công trình thi công</LayoutHeaderNavbarItem>
    </LayoutHeaderNavbarContainer>
    <span className="background-[linear-gradient(to left, #000 10%, rgba(249, 249, 249, 0) 90%)] absolute inset-y-0 right-0 w-8" />
  </div>
);

export default LayoutHeaderNavbar;
