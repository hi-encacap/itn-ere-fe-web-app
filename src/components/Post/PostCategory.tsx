import { IPost } from "@encacap-group/common/dist/re";
import PostCategorySidebar, { PostCategorySidebarProps } from "./PostCategorySidebar";
import PostDetailSuggestionsContainer from "./PostDetailSuggestionContainer";
import PostListItem from "./PostListItem";

export interface PostCategoryProps
  extends Pick<PostCategorySidebarProps, "categories" | "suggestionCategories"> {
  posts: IPost[];
}

const PostCategory = ({ categories, suggestionCategories, posts }: PostCategoryProps) => {
  return (
    <>
      <div className="md:col-span-2 lg:col-span-3">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
          {posts.map((item) => (
            <PostListItem data={item} key={item.id} />
          ))}
        </div>
        <div className="mt-6 block lg:hidden">
          {suggestionCategories
            ?.filter((item) => item.posts.length > 1)
            ?.map(({ category, posts: suggestionPosts }, index) => (
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
      </div>
      <PostCategorySidebar
        className="hidden flex-col md:flex"
        categories={categories}
        isCollapsed={false}
        suggestionCategories={suggestionCategories}
      />
    </>
  );
};

export default PostCategory;
