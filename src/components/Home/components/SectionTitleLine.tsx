import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const SectionTitleLine = ({ className }: HTMLAttributes<HTMLElement>) => (
  <div className={twMerge("mx-auto mt-3 flex items-center justify-center space-x-2 md:mt-4", className)}>
    <div className="h-1 w-10 rounded-lg bg-encacap-main" />
    <div className="h-1 w-10 rounded-lg bg-encacap-main" />
    <div className="h-1 w-10 rounded-lg bg-encacap-main" />
  </div>
);

export default SectionTitleLine;
