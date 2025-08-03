import Contact from "@components/Common/Contact/Contact";
import Search from "@components/Common/Search/Search";
import { ICategory } from "@encacap-group/common/dist/re";
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
  siteConfig?: SiteConfigDataType;
  suggestionCategories?: PostCategorySidebarSuggestionItemType[];
  categories?: ICategory[];
}

const PostCategorySidebar = ({
  childrenCategories = [],
  className,
  isCollapsed,
  siteConfig,
  suggestionCategories,
}: PostCategorySidebarProps) => {
  return (
    <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
      <div className="sticky top-10 z-10 flex flex-col space-y-4 bg-white md:space-y-6 lg:space-y-10">
        {siteConfig && <Contact data={siteConfig} />}
        <Search />
        {Boolean(childrenCategories.length) && (
          <PostCategorySidebarTree childrenCategories={childrenCategories} isCollapsed={isCollapsed} />
        )}
        {suggestionCategories?.map((item) => (
          <PostCategorySidebarSuggestion data={item} key={item.category.id} isCollapsed={isCollapsed} />
        ))}
      </div>
    </div>
  );
};

export default PostCategorySidebar;
