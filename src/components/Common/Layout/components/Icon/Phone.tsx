import { IconPhoneBold } from "@components/Common/Icon";
import LayoutIconWrapper, { LayoutIconWrapperProps } from "./Wrapper";

const LayoutIconPhone = ({ href }: Omit<LayoutIconWrapperProps, "children">) => (
  <LayoutIconWrapper
    href={href}
    target="_self"
    className="hover:border-encacap-main hover:bg-yellow-100 hover:text-encacap-main"
  >
    <IconPhoneBold className="w-6" />
  </LayoutIconWrapper>
);

export default LayoutIconPhone;
