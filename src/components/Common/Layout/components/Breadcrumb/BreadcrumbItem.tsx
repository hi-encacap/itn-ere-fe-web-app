import Link from "next/link";

export interface LayoutBreadcrumbItemType {
  name: string;
  href: string;
}

interface LayoutBreadcrumbItemProps {
  data: LayoutBreadcrumbItemType;
}

const LayoutBreadcrumbItem = ({ data }: LayoutBreadcrumbItemProps) => (
  <>
    <div className="mx-3 first:hidden">/</div>
    <Link className="last:text-encacap-main" href={data.href}>
      {data.name}
    </Link>
  </>
);

export default LayoutBreadcrumbItem;
