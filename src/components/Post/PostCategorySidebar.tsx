import Contact from "@components/Common/Contact/Contact";
import Search from "@components/Common/Search/Search";
import { SiteConfigDataType } from "@interfaces/dataTypes";
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
  siteConfig?: SiteConfigDataType;
}

const PostCategorySidebar = ({
  categories,
  className,
  isCollapsed,
  siteConfig,
  suggestionCategories,
}: PostCategorySidebarProps) => {
  return (
    <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
      {siteConfig && <Contact data={siteConfig} />}
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
