import { IconBank, IconLocation, IconMail, IconPhoneRing } from "@components/Common/Icon";
import Logo from "@components/Common/Logo";
import { LayoutFooterColorEnum } from "@constants/enums";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import dayjs from "dayjs";
import Link from "next/link";
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
    <div className="grid gap-x-20 gap-y-6 lg:mt-4 lg:grid-cols-3 lg:gap-y-0">
      <div>
        <Logo />
        <div className="mt-4 font-semibold uppercase">{config.name}</div>
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
            <div>{config?.site_phone_number}</div>
          </div>
          <div className="flex space-x-4">
            <div className="flex h-6 w-6 items-center justify-center">
              <IconMail className="w-6" />
            </div>
            <div>{config?.site_email}</div>
          </div>
          <div className="flex space-x-4">
            <div className="flex h-6 w-6 items-center justify-center">
              <IconLocation className="mt-1 h-6 w-6 flex-shrink-0" />
            </div>
            <div>{config?.site_address}</div>
          </div>
          <div className="flex space-x-4">
            <div className="flex h-6 w-6 items-center justify-center">
              <IconBank className="mt-1 h-5 w-5 flex-shrink-0" />
            </div>
            <div>{config?.site_bank}</div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="font-semibold uppercase">Sơ đồ trang</div>
        <div className="my-5 h-0.5 w-20 rounded-full bg-encacap-main" />
        <div className="mt-2 flex flex-col space-y-3">
          <Link href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`} className="block hover:text-encacap-main">
            Sản phẩm
          </Link>
          <Link href={`/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`} className="block hover:text-encacap-main">
            Dịch vụ
          </Link>
          <Link href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`} className="block hover:text-encacap-main">
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

export default LayoutFooter;
