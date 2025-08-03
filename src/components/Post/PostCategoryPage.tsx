import PostLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import { ICategory } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { getCategoryPageLink } from "@utils/helper";
import PostCategory, { PostCategoryProps } from "./PostCategory";

export interface PostCategoryPageProps extends BasePageProps, PostCategoryProps {
  category: ICategory;
}

const PostCategoryPage = ({
  category,
  childrenCategories,
  posts,
  suggestionCategories,
  ...props
}: PostCategoryPageProps) => {
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
    <PostLayout data={category} breadcrumbItems={getCategoryBreadcrumbItems(category)} {...props}>
      <PostCategory
        childrenCategories={childrenCategories}
        suggestionCategories={suggestionCategories}
        posts={posts}
      />
    </PostLayout>
  );
};

export default PostCategoryPage;
