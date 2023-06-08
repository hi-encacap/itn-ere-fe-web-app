import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, IPost, getImageURL } from "@encacap-group/common/dist/re";
import { ProjectDataType, ServiceDataType } from "@interfaces/dataTypes";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HomeNewsItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  data: IPost | ServiceDataType | ProjectDataType;
  children: ReactNode;
  imageClassName?: string;
  href?: string;
}

const HomeNewsItemContainer = ({
  children,
  className,
  imageClassName,
  data,
  href,
}: HomeNewsItemContainerProps) => (
  <Link
    className={twMerge(
      "group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-gray-200 duration-100 hover:shadow-gray-300",
      className
    )}
    href={href || "/"}
  >
    <div className={twMerge("relative aspect-video w-full flex-shrink-0", imageClassName)}>
      <Image
        src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
        alt={"name" in data ? data.name : data.title}
        fill
        sizes="100%"
        className="object-cover object-center"
      />
    </div>
    {children}
  </Link>
);

export default HomeNewsItemContainer;
