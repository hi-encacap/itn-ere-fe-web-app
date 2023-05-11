import { IconLocation, IconPhoneRing } from "@components/Common/Icon";
import Logo from "@components/Common/Logo";
import { LayoutFooterColorEnum } from "@constants/enums";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import LayoutHeaderSocial from "../Header/Social";

interface LayoutFooterProps {
  color: LayoutFooterColorEnum;
  config: SiteConfigDataType;
}

const LayoutFooter = ({ config, color }: LayoutFooterProps) => (
  <footer
    className={twMerge(
      "px-4 pt-4 lg:bg-none lg:px-10 lg:pt-10",
      color === LayoutFooterColorEnum.DARK && "bg-gray-100"
    )}
  >
    <div className="lg:flex">
      <div className="flex items-center justify-between">
        <Logo iShowName />
        <LayoutHeaderSocial className="flex lg:hidden" config={config} />
      </div>
      <div className="mt-4 block h-0.5 w-full bg-gray-200 lg:hidden" />
      <div className="mt-4 flex-1 items-center justify-end lg:mt-0 lg:flex">
        <div className="flex items-center">
          <div className="mr-4 w-12 flex-shrink-0 lg:mr-6 lg:w-auto">
            <IconPhoneRing className="mx-auto w-6 lg:w-9" />
          </div>
          <div>
            <div className="text-sm">Điện thoại</div>
            <div className="font-semibold">{config?.site_phone_number}</div>
          </div>
        </div>
        <div className="mt-3 flex items-center lg:ml-16 lg:mt-0">
          <div className="mr-4 w-12 flex-shrink-0 lg:mr-6 lg:w-auto">
            <IconLocation className="mx-auto w-7 lg:w-10" />
          </div>
          <div>
            <div className="text-sm">Địa chỉ</div>
            <div className="font-semibold">{config?.site_address}</div>
          </div>
        </div>
        <LayoutHeaderSocial className="hidden items-center lg:ml-16 lg:flex" config={config} />
      </div>
    </div>
    <div className="mt-4 border-t-2 py-4 text-center lg:mt-10">
      Copyrights © {dayjs().format("YYYY")}. All rights reserved by{" "}
      <a href="https://www.facebook.com/khackhanh.encacap/" className="font-semibold">
        Encacap
      </a>
    </div>
  </footer>
);

export default LayoutFooter;
