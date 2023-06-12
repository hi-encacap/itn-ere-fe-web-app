import { SITE_CONFIG_CODE_ENUM } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { beautyPhoneNumber } from "@utils/helper";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { IconPhoneRing } from "../Icon";

interface ContactProps extends HTMLAttributes<HTMLElement> {
  data: SiteConfigDataType;
  isShowTitle?: boolean;
}

const Contact = ({ data, isShowTitle = true, className }: ContactProps) => (
  <div className={twMerge("rounded-lg px-4 ring-2 ring-gray-200 md:px-5", className)}>
    {isShowTitle && (
      <div className="hidden cursor-pointer items-center justify-between border-b-2 border-gray-200 py-4 md:flex md:py-5 md:font-semibold">
        Liên hệ ngay
      </div>
    )}
    <div
      className={twMerge(
        "flex flex-col items-center justify-center py-8 md:py-6",
        !isShowTitle && "md:flex-row md:space-x-6"
      )}
    >
      <div className={twMerge("relative h-32 w-32", !isShowTitle && "md:h-20 md:w-20")}>
        <Image
          src="/logo-center.png"
          alt={data.website.name as string}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="mb-5 mt-4 flex-1">
        <div className={twMerge("font-semibold", isShowTitle && "text-center")}>
          {data.website.name as string}
        </div>
        {!isShowTitle && (
          <div className="mt-1 hidden text-sm md:block">
            <span className="font-semibold">Điện thoại:</span>
            <span className="ml-2">
              {beautyPhoneNumber(data[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.phone as string)}
            </span>
          </div>
        )}
      </div>
      <a
        href={`tel:${data[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.phone}`}
        className="flex cursor-pointer items-center justify-center space-x-4 rounded-full bg-gray-200 px-6 py-3 duration-100 hover:bg-encacap-main hover:text-white"
      >
        <IconPhoneRing className="w-5" />
        <span className={twMerge("ml-2", !isShowTitle && "md:hidden")}>
          {beautyPhoneNumber(data[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION]?.phone as string)}
        </span>
      </a>
    </div>
  </div>
);

export default Contact;
