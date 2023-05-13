import { IconHomeServiceBorder } from "@components/Common/Icon";
import { ReactElement, cloneElement } from "react";
import { twMerge } from "tailwind-merge";

interface HomeServiceItemProps {
  title: string;
  icon: ReactElement;
}

const HomeCategoryItem = ({ title, icon }: HomeServiceItemProps) => (
  <div className="group flex cursor-pointer flex-col items-center justify-center space-y-4 rounded-3xl px-2 py-0 text-encacap-main duration-100 md:space-y-9 md:bg-gray-100 md:px-6 md:py-12 md:hover:bg-encacap-main md:hover:text-white">
    <div className="relative mt-3 aspect-square w-full sm:max-w-[10rem] md:w-40">
      <IconHomeServiceBorder className="h-full w-full" />
      {cloneElement(icon, {
        ...icon.props,
        className: twMerge(
          icon.props.className,
          "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        ),
      })}
    </div>
    <div className="flex flex-1 items-center justify-center text-center font-semibold">{title}</div>
  </div>
);

export default HomeCategoryItem;
