import { IPost } from "@encacap-group/common/dist/re";
import { getPostDetailLink } from "@utils/helper";
import PostListItemContainer from "./PostListItemContainer";

interface PostListItemProps {
  data: IPost;
}

const PostListItem = ({ data }: PostListItemProps) => (
  <PostListItemContainer data={data} href={getPostDetailLink(data)}>
    <div className="px-4 py-3 md:px-5 md:py-5">
      <div className="mb-3 mt-1 flex">
        <div className="rounded-md bg-yellow-100 px-3 py-1 text-xs font-semibold text-encacap-main">
          {data.category.name}
        </div>
      </div>
      <h3 className="line-clamp-2 font-semibold duration-100 group-hover:text-encacap-main">{data.title}</h3>
    </div>
  </PostListItemContainer>
);

export default PostListItem;
