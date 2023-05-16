import { ServiceDataType } from "@interfaces/dataTypes";
import { getServiceDetailLink } from "@utils/helper";
import { twMerge } from "tailwind-merge";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeServiceListItemProps {
  data: ServiceDataType;
  isHighlighFirst?: boolean;
}

const HomeServiceListItem = ({ data, isHighlighFirst = true }: HomeServiceListItemProps) => (
  <HomeNewsItemContainer
    data={data}
    className={twMerge("group flex-row md:flex-col", isHighlighFirst ? "first:flex-col" : "flex-col")}
    imageClassName={twMerge("w-28 md:w-full", isHighlighFirst ? "group-first:w-full" : "w-full")}
    href={getServiceDetailLink(data)}
  >
    <div className="px-4 py-4 md:px-6 md:py-5">
      <h3 className="font-semibold duration-100 group-hover:text-encacap-main">{data.name}</h3>
      <p
        className={twMerge(
          "line-clamp-2 border-gray-100 pt-2 md:mt-5 md:line-clamp-3 md:border-t-2 md:pt-4",
          isHighlighFirst ? "group-first:line-clamp-3" : "line-clamp-3"
        )}
      >
        {data.shortDescription}
      </p>
      <div className="mt-5 hidden border-t-2 border-gray-100 pt-4 text-blue-500 hover:underline hover:underline-offset-4 md:block">
        Xem chi tiết
      </div>
    </div>
  </HomeNewsItemContainer>
);

export default HomeServiceListItem;
