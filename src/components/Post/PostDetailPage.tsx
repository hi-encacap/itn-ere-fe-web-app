import PostLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import { ICategory, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { getCategoryPageLink } from "@utils/helper";
import { PostCategoryProps } from "./PostCategory";
import { PostCategorySidebarSuggestionItemType } from "./PostCategorySidebarSuggestion";
import PostDetail from "./PostDetail";

export interface PostDetailPageProps extends BasePageProps, PostCategoryProps {
  category: ICategory;
  rootCategory: ICategory;
  post: IPost;
  suggestionCategories?: PostCategorySidebarSuggestionItemType[];
  categories: ICategory[];
}

const PostDetailPage = ({
  category,
  childrenCategories,
  posts,
  post,
  suggestionCategories,
  rootCategory,
  categories,
  ...props
}: PostDetailPageProps) => {
  const getCategoryBreadcrumbItems = (data: ICategory): LayoutBreadcrumbItemType[] => {
    const breadcrumbItems: LayoutBreadcrumbItemType[] = [];
    let currentCategory = data;

    while (currentCategory) {
      breadcrumbItems.push({
        name: currentCategory.name,
        href: getCategoryPageLink(currentCategory),
      });
      currentCategory = currentCategory.parent as ICategory;
    }

    return breadcrumbItems.reverse();
  };

  return (
    <PostLayout
      data={category}
      title={post.title}
      breadcrumbItems={getCategoryBreadcrumbItems(category)}
      categories={categories}
      {...props}
    >
      <PostDetail
        childrenCategories={childrenCategories}
        post={post}
        posts={posts}
        suggestionCategories={suggestionCategories}
        rootCategory={rootCategory}
        siteConfig={props.websiteConfig}
      />
    </PostLayout>
  );
};

export default PostDetailPage;
