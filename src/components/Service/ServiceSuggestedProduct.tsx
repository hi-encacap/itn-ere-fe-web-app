import PostSidebarCollapsibleBlock from "@components/Common/PostSidebarCollapsibleBlock";
import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, getImageURL } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { getCategoryPageLink } from "@utils/helper";
import ServiceSuggestedProductItem from "./ServiceSuggestedProductItem";

interface ServiceSuggestedProductProps {
  data: ProductDataType[];
}

const ServiceSuggestedProduct = ({ data }: ServiceSuggestedProductProps) => (
  <PostSidebarCollapsibleBlock isCollapsed={false} title="Sản phẩm có thể bạn quan tâm">
    <div className="flex flex-col space-y-4 border-t-2 border-gray-200 py-6">
      {data.map((item) => (
        <ServiceSuggestedProductItem
          name={item.name}
          href={getCategoryPageLink(item.category)}
          image={getImageURL(item.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
          key={item.id}
        />
      ))}
    </div>
  </PostSidebarCollapsibleBlock>
);

export default ServiceSuggestedProduct;
