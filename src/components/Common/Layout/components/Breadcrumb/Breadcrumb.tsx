import { HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import LayoutBreadcrumbItem, { LayoutBreadcrumbItemType } from "./BreadcrumbItem";

export interface LayoutBreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  items: Array<LayoutBreadcrumbItemType | boolean>;
}

const LayoutBreadcrumb = ({ items, className }: LayoutBreadcrumbProps) => {
  const breadcrumbItems = useMemo(
    () => [
      {
        name: "Trang chủ",
        href: "/",
      },
      ...items,
    ],
    [items]
  );

  return (
    <div className={twMerge("mt-4 flex flex-wrap items-center justify-center text-white", className)}>
      {breadcrumbItems.filter(Boolean).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <LayoutBreadcrumbItem key={index} data={item} />
      ))}
    </div>
  );
};

export default LayoutBreadcrumb;
