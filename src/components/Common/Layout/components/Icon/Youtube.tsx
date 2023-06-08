import { IconYoutube } from "@components/Common/Icon";
import LayoutIconWrapper, { LayoutIconWrapperProps } from "./Wrapper";

const LayoutIconYoutube = ({ href }: Omit<LayoutIconWrapperProps, "children">) => (
  <LayoutIconWrapper href={href} className="hover:border-red-500 hover:bg-red-100 hover:text-red-500">
    <IconYoutube />
  </LayoutIconWrapper>
);

export default LayoutIconYoutube;
