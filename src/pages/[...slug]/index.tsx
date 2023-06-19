import PostLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import PostCategory, { PostCategoryProps } from "@components/Post/PostCategory";
import { ICategory } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { getCategoryPageLink, getRequestURL } from "@utils/helper";
import { IncomingMessage } from "http";
import { isNumber } from "lodash";
import { GetServerSideProps } from "next";

interface CategoryOrDetailPageProps extends BasePageProps, PostCategoryProps {
  category: ICategory;
}

const CategoryOrDetailPage = ({
  category,
  categories,
  posts,
  suggestionCategories,
  ...props
}: CategoryOrDetailPageProps) => {
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
      <PostCategory categories={categories} suggestionCategories={suggestionCategories} posts={posts} />
    </PostLayout>
  );
};

const getSuggestionCategory = async (category: ICategory) => {
  const suggestionPosts = await postService.getPosts({
    categoryCode: category.code,
    limit: 5,
    expand: "category.parent",
  });

  return {
    category,
    posts: suggestionPosts,
  };
};

const getCategoryPageProps = async (categoryCode: string, req: IncomingMessage, rootCategoryCode: string) => {
  const [siteConfig, category, posts, rootCategory, otherRootCategories] = await Promise.all([
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(categoryCode),
    postService.getPosts({ categoryCode, expand: "category.parent" }),
    categoryService.getCategoryByCode(rootCategoryCode, {
      expand: "children, children.parent, children.avatar",
    }),
    categoryService.getRootCategories({
      excludedCodes: [rootCategoryCode],
    }),
  ]);

  const suggestionCategories = await Promise.all(otherRootCategories.map(getSuggestionCategory));

  const head = { title: category.name, requestURL: getRequestURL(req), description: category.name };

  return {
    props: {
      head,
      siteConfig,
      category,
      posts,
      categories: rootCategory.children as ICategory[],
      suggestionCategories,
    },
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const { slug } = params as Record<string, string[]>;
  const firstSlug = slug.at(0);
  const lastSlug = slug.at(-1);

  if (isNumber(lastSlug)) {
    // TODO: WILL UPDATE LATER.
    return {
      props: {},
    };
  }

  return getCategoryPageProps(lastSlug as string, req, firstSlug as string);
};

export default CategoryOrDetailPage;
