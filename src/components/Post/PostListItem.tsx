import { IPost } from "@encacap-group/common/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { getPostDetailLink } from "@utils/helper";
import { first } from "lodash";
import PostListItemContainer from "./PostListItemContainer";

interface PostListItemProps {
  data: IPost | ProductDataType;
}

const PostListItem = ({ data }: PostListItemProps) => {
  return (
    <PostListItemContainer data={data} href={getPostDetailLink(data)}>
      <div className="px-4 py-3 md:px-5 md:py-5">
        {"category" in data && (
          <div className="mb-3 mt-1 flex">
            <div className="rounded-md bg-yellow-100 px-3 py-1 text-xs font-semibold text-encacap-main">
              {data.category.name}
            </div>
          </div>
        )}
        <h3 className="line-clamp-2 font-semibold duration-100 group-hover:text-encacap-main">
          {data.title}
        </h3>
        {"variants" in data && (
          <div className="mt-1.5">
            <span className="text-xs text-slate-500 line-through">
              {Number(first(data.variants)?.price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <span className="text-sm pl-3">
              {Number(first(data.variants)?.price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
        )}
      </div>
    </PostListItemContainer>
  );
};

export default PostListItem;
