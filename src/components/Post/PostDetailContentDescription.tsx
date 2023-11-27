import { CATEGORY_GROUP_ENUM, IImageResponse, IPost } from "@encacap-group/common/dist/re";
import parse from "html-react-parser";
import { get } from "lodash";
import PostDetailSlider from "./PostDetailSlider";

interface PostDetailContentDescriptionProps {
  post: IPost;
}

const PostDetailContentDescription = ({ post }: PostDetailContentDescriptionProps) => {
  return (
    <>
      <PostDetailSlider data={[post.avatar, ...(get(post, "images", []) as IImageResponse[])]} />
      <div className="pb-6 pt-4 md:pb-8 md:pt-4">
        <div className="text-encacap-main">{post.category.name}</div>
        <div className="mt-2 text-xl font-semibold md:text-3xl">{post.title}</div>
      </div>
      <div className="border-t-2 border-gray-100 py-5">
        {post.category.categoryGroupCode === CATEGORY_GROUP_ENUM.PRODUCT && (
          <div className="text-xl font-bold">Mô tả</div>
        )}
        <div className="post-content mt-3 text-base text-gray-500">{parse(post.content)}</div>
      </div>
    </>
  );
};

export default PostDetailContentDescription;
