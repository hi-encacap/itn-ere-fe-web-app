import { AnchorHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export interface LayoutIconWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactElement;
}

const LayoutIconWrapper = ({ href, target = "_blank", className, children }: LayoutIconWrapperProps) => (
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    className={twMerge(
      "flex h-11 w-11 items-center justify-center rounded-full border-2 bg-gray-100 text-xl text-zinc-500 duration-150",
      className
    )}
  >
    {children}
  </a>
);

export default LayoutIconWrapper;
