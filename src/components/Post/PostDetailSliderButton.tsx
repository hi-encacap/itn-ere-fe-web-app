import { Left } from "@icon-park/react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const PostDetailSliderButton = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "absolute z-10 hidden text-gray-500 duration-150 -translate-y-1/2 bg-white border-2 border-transparent rounded-full cursor-pointer bg-opacity-80 hover:border-encacap-main top-1/2 hover:text-encacap-main w-10 h-10 md:flex items-center justify-center",
        className
      )}
    >
      <Left theme="outline" size="24" />
    </div>
  );
};

export default PostDetailSliderButton;
