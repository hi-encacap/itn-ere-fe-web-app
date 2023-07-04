import { IconChevronRight } from "@components/Common/Icon";
import Link from "next/link";

interface ProductCategoryItemProps {
  name: string;
  href: string;
}

const ProductCategoryItem = ({ name, href }: ProductCategoryItemProps) => (
  <Link
    href={href}
    className="-mx-1 flex items-center justify-start space-x-4 py-1 duration-100 hover:text-encacap-main"
  >
    <IconChevronRight className="w-4" />
    <div>{name}</div>
  </Link>
);

export default ProductCategoryItem;
