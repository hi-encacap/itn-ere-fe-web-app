import Contact from "@components/Common/Contact/Contact";
import { ICategory, IPost } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { twMerge } from "tailwind-merge";
import { PostCategorySidebarSuggestionItemType } from "./PostCategorySidebarSuggestion";
import PostDetailContentDescription from "./PostDetailContentDescription";
import PostDetailSuggestionsContainer from "./PostDetailSuggestionContainer";
import PostListItem from "./PostListItem";

export interface PostDetailContentProps {
  posts: IPost[];
  post: IPost;
  siteConfig: SiteConfigDataType;
  suggestionCategories?: PostCategorySidebarSuggestionItemType[];
  rootCategory: ICategory;
}

const PostDetailContent = ({
  post,
  posts,
  siteConfig,
  suggestionCategories,
  rootCategory,
}: PostDetailContentProps) => {
  return (
    <div className="md:col-span-2 lg:col-span-3">
      <PostDetailContentDescription post={post} />
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
        <PostDetailSuggestionsContainer
          title={`${category.name} có thể bạn quan tâm`}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={twMerge(suggestionPosts.length < 2 && "hidden")}
        >
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
