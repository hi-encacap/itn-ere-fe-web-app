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
      "group relative inline-block whitespace-nowrap py-3 md:py-2",
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
