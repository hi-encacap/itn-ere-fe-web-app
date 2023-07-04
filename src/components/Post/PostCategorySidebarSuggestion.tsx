import { ICategory, IPost } from "@encacap-group/common/dist/re";
import { getCategoryPageLink } from "@utils/helper";
import Link from "next/link";
import PostCategorySidebarCollapsibleContainer from "./PostCategorySidebarCollapsibleContainer";
import PostCategorySidebarSuggestionItem from "./PostCategorySidebarSuggestionItem";

export interface PostCategorySidebarSuggestionItemType {
  category: ICategory;
  posts: IPost[];
}

interface PostCategorySidebarSuggestionProps {
  data: PostCategorySidebarSuggestionItemType;
  isCollapsed: boolean;
}

const PostCategorySidebarSuggestion = ({
  data: { category, posts },
  isCollapsed,
}: PostCategorySidebarSuggestionProps) => {
  if (!posts.length) return null;

  return (
    <PostCategorySidebarCollapsibleContainer
      isCollapsed={isCollapsed}
      title={`${category.name} có thể bạn quan tâm`}
      isResponsive={false}
    >
      <div className="flex flex-col space-y-4 border-y-2 border-gray-200 py-6">
        {posts.map((item) => (
          <PostCategorySidebarSuggestionItem data={item} key={item.id} />
        ))}
      </div>
      <Link
        href={getCategoryPageLink(category)}
        className="block pb-4 pt-3 text-sm font-semibold duration-100 hover:text-encacap-main"
      >
        Xem thêm
      </Link>
    </PostCategorySidebarCollapsibleContainer>
  );
};

export default PostCategorySidebarSuggestion;
