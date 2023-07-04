import { IMAGE_VARIANT_ENUM, IPost, getImageURL } from "@encacap-group/common/dist/re";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PostListItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  data: IPost;
  children: ReactNode;
  imageClassName?: string;
  href: string;
}

const PostListItemContainer = ({
  children,
  className,
  imageClassName,
  data,
  href,
}: PostListItemContainerProps) => (
  <Link
    className={twMerge(
      "group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-gray-200 duration-100 hover:shadow-gray-300",
      className
    )}
    href={href}
  >
    <div className={twMerge("relative aspect-video w-full flex-shrink-0", imageClassName)}>
      <Image
        src={getImageURL(data.avatar, IMAGE_VARIANT_ENUM.THUMBNAIL)}
        alt={data.title}
        fill
        sizes="100%"
        className="object-cover object-center"
      />
    </div>
    {children}
  </Link>
);

export default PostListItemContainer;
