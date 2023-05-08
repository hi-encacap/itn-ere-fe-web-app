import { IconFacebook } from "@components/Common/Icon";
import LayoutIconWrapper, { LayoutIconWrapperProps } from "./Wrapper";

const LayoutIconFacebook = ({ href }: Omit<LayoutIconWrapperProps, "children">) => (
  <LayoutIconWrapper href={href} className="hover:border-blue-500 hover:bg-blue-100 hover:text-blue-500">
    <IconFacebook />
  </LayoutIconWrapper>
);

export default LayoutIconFacebook;
