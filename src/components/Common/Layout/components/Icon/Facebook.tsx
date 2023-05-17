import { IconFacebook } from "@components/Common/Icon";
import { twMerge } from "tailwind-merge";
import LayoutIconWrapper, { LayoutIconWrapperProps } from "./Wrapper";

const LayoutIconFacebook = ({ href, className }: Omit<LayoutIconWrapperProps, "children">) => (
  <LayoutIconWrapper
    href={href}
    className={twMerge("hover:border-blue-500 hover:bg-blue-100 hover:text-blue-500", className)}
  >
    <IconFacebook />
  </LayoutIconWrapper>
);

export default LayoutIconFacebook;
