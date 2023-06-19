import Search from "@components/Common/Search/Search";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import PostCategorySidebarSuggestion, {
  PostCategorySidebarSuggestionItemType,
} from "./PostCategorySidebarSuggestion";
import PostCategorySidebarTree, { PostCategorySidebarTreeProps } from "./PostCategorySidebarTree";

export interface PostCategorySidebarProps
  extends HTMLAttributes<HTMLDivElement>,
    PostCategorySidebarTreeProps {
  suggestionCategories: PostCategorySidebarSuggestionItemType[];
}

const PostCategorySidebar = ({
  categories,
  className,
  isCollapsed,
  suggestionCategories,
}: PostCategorySidebarProps) => {
  return (
    <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
      <Search />
      {Boolean(categories.length) && (
        <PostCategorySidebarTree categories={categories} isCollapsed={isCollapsed} />
      )}
      {suggestionCategories.map((item) => (
        <PostCategorySidebarSuggestion key={item.category.code} data={item} isCollapsed={isCollapsed} />
      ))}
    </div>
  );
};

export default PostCategorySidebar;
