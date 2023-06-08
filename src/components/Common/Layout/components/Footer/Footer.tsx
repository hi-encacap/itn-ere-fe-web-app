import { IconBank, IconLocation, IconMail, IconPhoneRing } from "@components/Common/Icon";
import Logo from "@components/Common/Logo";
import { LayoutFooterColorEnum } from "@constants/enums";
import { ACBUILDING_CATEGORY_CODE_ENUM, SITE_CONFIG_CODE_ENUM } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { beautyPhoneNumber } from "@utils/helper";
import dayjs from "dayjs";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import LayoutHeaderSocial from "../Header/Social";

interface LayoutFooterProps {
  color: LayoutFooterColorEnum;
  config: SiteConfigDataType;
}

const LayoutFooter = ({ config, color }: LayoutFooterProps) => {
  return (
    <footer
      className={twMerge(
        "px-4 pt-4 lg:bg-none lg:px-10 lg:pt-10",
        color === LayoutFooterColorEnum.DARK && "bg-gray-100"
      )}
    >
      <div className="grid gap-x-20 gap-y-6 lg:mt-4 lg:grid-cols-3 lg:gap-y-0">
        <div>
          <Logo />
          <div className="mt-4 font-semibold uppercase">{config.website.name as string}</div>
          <div className="mt-3">
            Chuyên thi công xây dựng nhà dân dụng, nhà tiền chế, kinh doanh vật liệu gỗ, nhựa, sắt, thép...
          </div>
          <LayoutHeaderSocial className="mt-5" config={config} />
        </div>
        <div>
          <div className="font-semibold uppercase">Thông tin liên hệ</div>
          <div className="my-5 h-0.5 w-20 rounded-full bg-encacap-main" />
          <div className="mt-2 flex flex-col space-y-3">
            <div className="flex space-x-4">
              <div className="flex h-6 w-6 items-center justify-center">
                <IconPhoneRing className="w-5" />
              </div>
              <div>
                {beautyPhoneNumber(config[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.phone as string)}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex h-6 w-6 items-center justify-center">
                <IconMail className="w-6" />
              </div>
              <div>{config[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.email as string}</div>
            </div>
            <div className="flex space-x-4">
              <div className="flex h-6 w-6 items-center justify-center">
                <IconLocation className="mt-1 h-6 w-6 flex-shrink-0" />
              </div>
              <div>{config[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.address as string}</div>
            </div>
            <div className="flex space-x-4">
              <div className="flex h-6 w-6 items-center justify-center">
                <IconBank className="h-5 w-5 flex-shrink-0" />
              </div>
              <div>{config[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.bank as string}</div>
            </div>
            <div className="flex space-x-4">
              <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden text-xs font-semibold">
                <span className="absolute inset-x-0 top-0 h-px bg-slate-700" />
                TAX
                <span className="absolute inset-x-0 bottom-0 h-px bg-slate-700" />
              </div>
              <div>{config[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.tax as string}</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="font-semibold uppercase">Sơ đồ trang</div>
          <div className="my-5 h-0.5 w-20 rounded-full bg-encacap-main" />
          <div className="mt-2 flex flex-col space-y-3">
            <Link
              href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`}
              className="block hover:text-encacap-main"
            >
              Sản phẩm
            </Link>
            <Link
              href={`/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`}
              className="block hover:text-encacap-main"
            >
              Dịch vụ
            </Link>
            <Link
              href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`}
              className="block hover:text-encacap-main"
            >
              Dự án đã triển khai
            </Link>
          </div>
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
};

export default LayoutFooter;
