import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LayoutHeaderNavbarItemProps {
  href: string;
  isActive?: boolean;
  children?: ReactNode;
}

const LayoutHeaderNavbarItem = ({ href, isActive = false, children }: LayoutHeaderNavbarItemProps) => (
  <Link
    href={href}
    className={twMerge(
      "group relative inline-block w-full whitespace-nowrap py-3 text-center text-2xl font-bold md:w-fit md:py-2 md:text-left md:text-base md:font-semibold",
      isActive && "text-encacap-main"
    )}
  >
    {children}
    <span
      className={twMerge(
        "absolute bottom-0 hidden h-0.5 rounded-t-xl bg-encacap-main duration-150 group-hover:w-full md:block",
        isActive ? "w-full" : "w-0"
      )}
    />
  </Link>
);

export default LayoutHeaderNavbarItem;
