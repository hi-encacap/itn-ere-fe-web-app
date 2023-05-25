import { IconChevronRight } from "@components/Common/Icon";
import PostSidebarCollapsibleBlock from "@components/Common/PostSidebarCollapsibleBlock";
import {
  ACBUILDING_CATEGORY_CODE_ENUM,
  DEFAULT_CLOUDFLARE_VARIANT_ENUM,
  getImageURL,
} from "@encacap-group/common/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { getCategoryPageLink } from "@utils/helper";
import Link from "next/link";
import ServiceSuggestedProductItem from "./ServiceSuggestedProductItem";

interface ServiceSuggestedProductProps {
  data: ProductDataType[];
}

const ServiceSuggestedProduct = ({ data }: ServiceSuggestedProductProps) => (
  <PostSidebarCollapsibleBlock isCollapsed={false} title="Sản phẩm có thể bạn quan tâm">
    <div className="flex flex-col space-y-4 border-gray-200 pb-6 md:border-t-2 md:py-6">
      {data.map((item) => (
        <ServiceSuggestedProductItem
          name={item.name}
          href={getCategoryPageLink(item.category)}
          image={getImageURL(item.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
          key={item.id}
        />
      ))}
    </div>
    <Link
      href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`}
      className="flex items-center space-x-4 border-t-2 border-gray-200 pt-4 duration-100 hover:text-encacap-main md:py-4 md:pb-5"
    >
      <IconChevronRight className="-ml-0.5 w-4" />
      <span className="text-base font-normal md:text-sm">Xem tất cả sản phẩm</span>
    </Link>
  </PostSidebarCollapsibleBlock>
);

export default ServiceSuggestedProduct;
