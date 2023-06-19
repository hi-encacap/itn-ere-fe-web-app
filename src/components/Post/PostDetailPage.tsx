import PostLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import { ICategory, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { getCategoryPageLink } from "@utils/helper";
import { PostCategoryProps } from "./PostCategory";
import PostDetail from "./PostDetail";

export interface PostDetailPageProps extends BasePageProps, PostCategoryProps {
  category: ICategory;
  post: IPost;
}

const PostDetailPage = ({
  category,
  categories,
  posts,
  post,
  suggestionCategories,
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
    <PostLayout data={category} breadcrumbItems={getCategoryBreadcrumbItems(category)} {...props}>
      <PostDetail
        categories={categories}
        post={post}
        posts={posts}
        suggestionCategories={suggestionCategories}
        siteConfig={props.siteConfig}
      />
    </PostLayout>
  );
};

export default PostDetailPage;
