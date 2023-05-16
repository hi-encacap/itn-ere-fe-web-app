import { IconChevronRight } from "@components/Common/Icon";
import PostSidebarCollapsibleBlock from "@components/Common/PostSidebarCollapsibleBlock";
import ServiceSuggestedProductItem from "@components/Service/ServiceSuggestedProductItem";
import {
  ACBUILDING_CATEGORY_CODE_ENUM,
  DEFAULT_CLOUDFLARE_VARIANT_ENUM,
  getImageURL,
} from "@encacap-group/types/dist/re";
import { ServiceDataType } from "@interfaces/dataTypes";
import { getCategoryPageLink } from "@utils/helper";
import Link from "next/link";

interface ProjectSuggestedServiceProps {
  data: ServiceDataType[];
}

const ProjectSuggestedService = ({ data }: ProjectSuggestedServiceProps) => (
  <PostSidebarCollapsibleBlock isCollapsed={false} title="Dịch vụ có thể bạn quan tâm">
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
      href={`/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`}
      className="flex items-center space-x-4 border-t-2 border-gray-200 pt-4 duration-100 hover:text-encacap-main md:pb-5 md:pt-4"
    >
      <IconChevronRight className="-ml-0.5 w-4" />
      <span className="text-base font-normal md:text-sm">Xem tất cả dịch vụ</span>
    </Link>
  </PostSidebarCollapsibleBlock>
);

export default ProjectSuggestedService;
