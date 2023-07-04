import Image from "next/image";
import Link from "next/link";

interface ServiceSuggestedProductItemProps {
  image: string;
  name: string;
  href: string;
}

const ServiceSuggestedProductItem = ({ image, name, href }: ServiceSuggestedProductItemProps) => (
  <Link href={href} className="group flex items-center justify-start space-x-4">
    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
      <Image src={image} alt={name} fill sizes="100%" className="object-cover object-center" />
    </div>
    <h3 className="line-clamp-3 text-sm font-semibold text-gray-700 duration-100 group-hover:text-encacap-main">
      {name}
    </h3>
  </Link>
);

export default ServiceSuggestedProductItem;
