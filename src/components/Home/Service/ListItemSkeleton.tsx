import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const HomeListItemSkeleton = ({ className }: HTMLAttributes<HTMLElement>) => (
  <div
    className={twMerge(
      "hidden h-full min-h-[24rem] w-full animate-pulse rounded-xl bg-white shadow-md shadow-gray-200 md:block",
      className
    )}
  />
);

export default HomeListItemSkeleton;
