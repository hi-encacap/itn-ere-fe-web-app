import { IconHomeServiceBorder } from "@components/Common/Icon";
import { ReactElement, cloneElement } from "react";
import { twMerge } from "tailwind-merge";

interface HomeServiceItemProps {
  title: string;
  icon: ReactElement;
}

const HomeServiceItem = ({ title, icon }: HomeServiceItemProps) => (
  <div className="group flex cursor-pointer flex-col items-center justify-center space-y-9 rounded-3xl px-4 py-4 text-encacap-main duration-100 hover:bg-encacap-main hover:text-white md:bg-gray-100 md:px-6 md:py-12">
    <div className="relative mt-3 h-40 w-40">
      <IconHomeServiceBorder className="h-full w-full" />
      {cloneElement(icon, {
        ...icon.props,
        className: twMerge(icon.props.className, "absolute left-1/2 -translate-x-1/2"),
      })}
    </div>
    <div className="flex flex-1 items-center justify-center text-center font-semibold">{title}</div>
  </div>
);

export default HomeServiceItem;
