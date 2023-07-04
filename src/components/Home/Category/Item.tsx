import { IconHomeServiceBorder } from "@components/Common/Icon";
import Link from "next/link";
import { ReactElement } from "react";

interface HomeServiceItemProps {
  title: string;
  icon: ReactElement;
  href: string;
}

const HomeCategoryItem = ({ title, icon, href }: HomeServiceItemProps) => (
  <Link
    href={href}
    className="group flex cursor-pointer flex-col items-center justify-center space-y-4 rounded-3xl px-2 py-0 text-encacap-main duration-100 md:space-y-9 md:bg-gray-100 md:px-6 md:py-12 md:hover:bg-encacap-main md:hover:text-white"
  >
    <div className="relative mt-3 flex aspect-square w-full items-center justify-center sm:max-w-[10rem] md:w-40">
      <IconHomeServiceBorder className="absolute inset-0 h-full w-full" />
      {icon}
    </div>
    <div className="flex flex-1 items-center justify-center text-center font-semibold">{title}</div>
  </Link>
);

export default HomeCategoryItem;
