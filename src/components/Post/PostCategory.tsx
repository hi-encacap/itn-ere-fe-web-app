import { IPost } from "@encacap-group/common/dist/re";
import PostCategorySidebar, { PostCategorySidebarProps } from "./PostCategorySidebar";
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
