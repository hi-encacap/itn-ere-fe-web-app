import PostCategorySidebar, { PostCategorySidebarProps } from "./PostCategorySidebar";
import PostDetailContent, { PostDetailContentProps } from "./PostDetailContent";

export interface PostDetailProps
  extends Pick<PostCategorySidebarProps, "childrenCategories">,
    PostDetailContentProps {}

const PostDetail = ({
  childrenCategories: categories,
  rootCategory,
  suggestionCategories,
  posts,
  post,
  siteConfig,
}: PostDetailProps) => {
  return (
    <>
      <PostDetailContent
        post={post}
        posts={posts}
        siteConfig={siteConfig}
        suggestionCategories={suggestionCategories}
        rootCategory={rootCategory}
      />
      <PostCategorySidebar
        className="hidden flex-col md:flex"
        childrenCategories={categories}
        isCollapsed={false}
        siteConfig={siteConfig}
      />
    </>
  );
};

export default PostDetail;
