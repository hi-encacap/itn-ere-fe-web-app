import Contact from "@components/Common/Contact/Contact";
import { CATEGORY_GROUP_ENUM, IMAGE_VARIANT_ENUM, IPost, getImageURL } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { decode } from "html-entities";
import Image from "next/image";
import striptags from "striptags";
import { PostCategorySidebarSuggestionItemType } from "./PostCategorySidebarSuggestion";
import PostDetailSuggestionsContainer from "./PostDetailSuggestionContainer";
import PostListItem from "./PostListItem";

export interface PostDetailContentProps {
  posts: IPost[];
  post: IPost;
  siteConfig: SiteConfigDataType;
  suggestionCategories?: PostCategorySidebarSuggestionItemType[];
}

const PostDetailContent = ({ post, posts, siteConfig, suggestionCategories }: PostDetailContentProps) => {
  return (
    <div className="md:col-span-2 lg:col-span-3">
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
        <div
          className="post-content mt-3 text-base text-gray-500"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <p className="hidden">{decode(striptags(post.content))}</p>
      </div>
      <PostDetailSuggestionsContainer title="Liên hệ ngay">
        <Contact data={siteConfig} isShowTitle={false} />
      </PostDetailSuggestionsContainer>
      <PostDetailSuggestionsContainer title="Có thể bạn quan tâm">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
          {posts.map((item) => (
            <PostListItem data={item} key={item.id} />
          ))}
        </div>
      </PostDetailSuggestionsContainer>
      {suggestionCategories?.map(({ category, posts: suggestionPosts }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PostDetailSuggestionsContainer title={`${category.name} có thể bạn quan tâm`} key={index}>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
            {suggestionPosts.map((item) => (
              <PostListItem data={item} key={item.id} />
            ))}
          </div>
        </PostDetailSuggestionsContainer>
      ))}
    </div>
  );
};

export default PostDetailContent;
