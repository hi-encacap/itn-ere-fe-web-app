/* eslint-disable react/no-danger */
import { IPost } from "@encacap-group/common/dist/re";
import { getPostDetailLink } from "@utils/helper";
import { decode } from "html-entities";
import striptags from "striptags";
import { twMerge } from "tailwind-merge";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeServiceListItemProps {
  isHighlighFirst?: boolean;
  data: IPost;
}

const HomeServiceListItem = ({ data, isHighlighFirst = true }: HomeServiceListItemProps) => {
  return (
    <HomeNewsItemContainer
      data={data}
      className={twMerge("group flex-row md:flex-col", isHighlighFirst ? "first:flex-col" : "flex-col")}
      imageClassName={twMerge("w-28 md:w-full", isHighlighFirst ? "group-first:w-full" : "w-full")}
      href={getPostDetailLink(data)}
    >
      <div className="flex flex-1 flex-col px-4 py-4 md:px-6 md:py-5">
        <h3 className="font-semibold duration-100 group-hover:text-encacap-main">{data.title}</h3>
        <div className="flex-1 border-gray-100 pt-2 md:mt-5 md:line-clamp-3 md:border-t-2 md:pt-4">
          <p
            className={twMerge("line-clamp-2", isHighlighFirst ? "group-first:line-clamp-3" : "line-clamp-3")}
          >
            {decode(striptags(data.content))}
          </p>
        </div>
        <div className="mt-5 hidden border-t-2 border-gray-100 pt-4 text-blue-500 hover:underline hover:underline-offset-4 md:block">
          Xem chi tiết
        </div>
      </div>
    </HomeNewsItemContainer>
  );
};

export default HomeServiceListItem;
