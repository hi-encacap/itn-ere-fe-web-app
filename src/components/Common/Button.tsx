import Link from "next/link";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  title: string;
  href?: string;
}

const Button = ({ className, title, href }: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={twMerge(
          "cursor-pointer rounded-full border-2 border-encacap-main bg-white px-6 py-3 text-center font-semibold text-encacap-main duration-100 hover:bg-encacap-main hover:text-white",
          className
        )}
      >
        {title}
      </Link>
    );
  }

  return (
    <div
      className={twMerge(
        "cursor-pointer rounded-full border-2 border-encacap-main bg-white px-6 py-3 text-center font-semibold text-encacap-main duration-100 hover:bg-encacap-main hover:text-white",
        className
      )}
    >
      {title}
    </div>
  );
};

export default Button;
