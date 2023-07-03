import { IconClose, IconMenu } from "@components/Common/Icon";
import Logo from "@components/Common/Logo";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import LayoutHeaderNavbar from "./Navbar";

const LayoutHeaderMobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="block md:hidden">
      <IconMenu className="mx-2 w-8 text-encacap-main" onClick={toggleMenu} />
      <div
        className={twMerge(
          "fixed inset-0 z-50 flex translate-x-full flex-col bg-white duration-200",
          isMenuOpen && "translate-x-0"
        )}
      >
        <div className="flex h-20 w-full items-center justify-end px-4">
          <div className="flex flex-1 items-center justify-between md:justify-between">
            <Logo />
            <IconClose className="mx-2 w-8 text-encacap-main" onClick={toggleMenu} />
          </div>
        </div>
        <div className="flex flex-1 flex-col border-t-2 px-12 py-10">
          <LayoutHeaderNavbar className="flex-1" onClick={handleCloseMenu} />
          {/* <LayoutHeaderSocial
            config={config}
            className="flex flex-shrink-0 justify-center border-t-2 border-gray-200 pt-10"
            wrapperClassName="w-16 h-16"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LayoutHeaderMobileNavbar;
