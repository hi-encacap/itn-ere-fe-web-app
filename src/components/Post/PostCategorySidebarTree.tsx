import { ICategory } from "@encacap-group/common/dist/re";
import PostCategorySidebarCollapsibleContainer from "./PostCategorySidebarCollapsibleContainer";
import PostCategorySidebarTreeItem from "./PostCategorySidebarTreeItem";

export interface PostCategorySidebarTreeProps {
  categories: ICategory[];
  isCollapsed: boolean;
}

const PostCategorySidebarTree = ({ categories, isCollapsed }: PostCategorySidebarTreeProps) => {
  return (
    <PostCategorySidebarCollapsibleContainer
      isCollapsed={isCollapsed}
      title="Danh mục bài viết"
      isResponsive={false}
    >
      <div className="flex flex-col space-y-4 border-t-2 border-gray-200 py-6">
        {categories.map((item) => (
          <PostCategorySidebarTreeItem category={item} key={item.id} level={0} />
        ))}
      </div>
    </PostCategorySidebarCollapsibleContainer>
  );
};

export default PostCategorySidebarTree;
