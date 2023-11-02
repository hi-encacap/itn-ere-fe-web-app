import { CATEGORY_GROUP_ENUM, IMAGE_VARIANT_ENUM, IPost, getImageURL } from "@encacap-group/common/dist/re";
import parse from "html-react-parser";
import Image from "next/image";

interface PostDetailContentDescriptionProps {
  post: IPost;
}

const PostDetailContentDescription = ({ post }: PostDetailContentDescriptionProps) => {
  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <Image
          src={getImageURL(post.avatar, IMAGE_VARIANT_ENUM.PUBLIC)}
          alt={post.title}
          fill
          sizes="100%"
          className="oject-center object-contain"
        />
      </div>
      <div className="pb-6 pt-4 md:pb-8 md:pt-8">
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
