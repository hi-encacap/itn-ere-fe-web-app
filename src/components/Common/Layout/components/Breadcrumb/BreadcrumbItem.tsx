import Link from "next/link";

export interface LayoutBreadcrumbItemType {
  name: string;
  href: string;
}

interface LayoutBreadcrumbItemProps {
  data: LayoutBreadcrumbItemType | boolean;
}

const LayoutBreadcrumbItem = ({ data }: LayoutBreadcrumbItemProps) => {
  if (typeof data === "boolean") return null;

  return (
    <>
      <div className="mx-3 first:hidden">/</div>
      <Link className="last:text-encacap-main" href={data.href}>
        {data.name}
      </Link>
    </>
  );
};

export default LayoutBreadcrumbItem;
