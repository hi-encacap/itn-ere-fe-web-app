import { LayoutFooterColorEnum } from "@constants/enums";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HomeSectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?: LayoutFooterColorEnum;
}

const HomeSectionContainer = ({
  children,
  color = LayoutFooterColorEnum.LIGHT,
  className,
}: HomeSectionContainerProps) => (
  <section
    className={twMerge(
      "flex flex-col space-y-4 px-4 py-6 md:space-y-16 md:px-6 md:py-20 lg:px-10 xl:px-48",
      color === LayoutFooterColorEnum.DARK && "bg-gray-100",
      className
    )}
  >
    {children}
  </section>
);

export default HomeSectionContainer;
