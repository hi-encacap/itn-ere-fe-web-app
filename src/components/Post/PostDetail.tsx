import PostCategorySidebar, { PostCategorySidebarProps } from "./PostCategorySidebar";
import PostDetailContent, { PostDetailContentProps } from "./PostDetailContent";

export interface PostDetailProps
  extends Pick<PostCategorySidebarProps, "categories">,
    PostDetailContentProps {}

const PostDetail = ({ categories, suggestionCategories, posts, post, siteConfig }: PostDetailProps) => {
  return (
    <>
      <PostDetailContent
        post={post}
        posts={posts}
        siteConfig={siteConfig}
        suggestionCategories={suggestionCategories}
      />
      <PostCategorySidebar
        className="hidden flex-col md:flex"
        categories={categories}
        isCollapsed={false}
        siteConfig={siteConfig}
      />
    </>
  );
};

export default PostDetail;
