import Logo from "@components/Common/Logo";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import LayoutHeaderMobileNavbar from "./MobileNavbar";
import LayoutHeaderNavbar from "./Navbar";
import LayoutHeaderSocial from "./Social";

export interface HeaderProps {
  config: SiteConfigDataType;
}

const LayoutHeader = ({ config }: HeaderProps) => (
  <div className="w-full border-b-2 border-gray-100 px-4 shadow-md shadow-gray-50 lg:px-10">
    <div className="flex h-20 items-center justify-between md:h-20">
      <div className="flex flex-1 items-center justify-between md:justify-start">
        <Logo />
        <LayoutHeaderNavbar className="ml-4 mr-4 hidden flex-1 items-center font-semibold md:flex lg:ml-10" />
        <LayoutHeaderMobileNavbar config={config} />
      </div>
      <LayoutHeaderSocial config={config} className="hidden md:flex" />
    </div>
  </div>
);

export default LayoutHeader;
