import Logo from "@components/Common/Logo";
import { ContactDataType } from "@interfaces/dataTypes";
import LayoutHeaderNavbar from "./Navbar";
import LayoutHeaderSocial from "./Social";

export interface HeaderProps {
  isHideMobileNavbar?: boolean;
  contact: ContactDataType;
}

const Header = ({ isHideMobileNavbar = false, contact }: HeaderProps) => (
  <div className="w-full border-b-2 border-gray-100 px-4 shadow-md shadow-gray-50 lg:px-10">
    <div className="flex h-20 items-center justify-between md:h-20">
      <div className="flex items-center">
        <Logo />
        <LayoutHeaderNavbar className="ml-4 mr-4 hidden flex-1 items-center font-semibold md:flex lg:ml-10" />
      </div>
      <LayoutHeaderSocial contact={contact} />
    </div>
    {!isHideMobileNavbar && (
      <LayoutHeaderNavbar className="-mx-4 flex whitespace-nowrap border-t-2 border-gray-100 px-4 md:hidden" />
    )}
  </div>
);

export default Header;
