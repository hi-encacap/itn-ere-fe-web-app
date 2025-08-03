import Logo from "@components/Common/Logo";
import { ICategory } from "@encacap-group/common/dist/re";
import LayoutHeaderMobileNavbar from "./MobileNavbar";
import LayoutHeaderNavbar from "./Navbar";

interface LayoutHeaderProps {
  categories?: ICategory[];
}

const LayoutHeader = ({ categories }: LayoutHeaderProps) => (
  <div className="w-full border-b-2 border-gray-100 px-4 shadow-md shadow-gray-50 lg:px-10">
    <div className="relative flex h-20 items-center justify-between md:h-20">
      <div className="flex flex-1 items-center justify-between md:justify-start">
        <Logo isShowName />
        <LayoutHeaderNavbar
          className="absolute inset-0 ml-4 mr-4 hidden flex-1 items-center justify-center font-semibold md:flex lg:ml-10"
          categories={categories}
        />
        <LayoutHeaderMobileNavbar />
      </div>
      {/* <LayoutHeaderSocial config={config} className="hidden md:flex" /> */}
    </div>
  </div>
);

export default LayoutHeader;
