import PostCategoryPage, { PostCategoryPageProps } from "@components/Post/PostCategoryPage";
import PostDetailPage, { PostDetailPageProps } from "@components/Post/PostDetailPage";
import { ICategory } from "@encacap-group/common/dist/re";
import { categoryService, configService, postService } from "@services/index";
import { getRequestURL } from "@utils/helper";
import { decode } from "html-entities";
import { IncomingMessage } from "http";
import { isInteger } from "lodash";
import { GetServerSideProps } from "next";
import striptags from "striptags";

interface GetCategoryPageParam {
  categoryCode: string;
  rootCategoryCode: string;
}

interface GetDetailPageParam extends GetCategoryPageParam {
  postId: number;
}

interface CategoryOrDetailPageProps extends PostCategoryPageProps, PostDetailPageProps {
  type: "category" | "detail";
}

const PostCategoryOrDetailPage = ({ type, ...props }: CategoryOrDetailPageProps) => {
  if (type === "category") {
    return <PostCategoryPage {...props} />;
  }

  return <PostDetailPage {...props} />;
};

const getSuggestionCategory = async (category: ICategory, limit: number) => {
  const suggestionPosts = await postService.getPosts({
    categoryCode: category.code,
    limit,
    expand: "category.parent",
  });

  return {
    category,
    posts: suggestionPosts,
  };
};

const getCategoryPageProps = async (
  { categoryCode, rootCategoryCode }: GetCategoryPageParam,
  req: IncomingMessage
) => {
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

  const suggestionCategories = await Promise.all(
    otherRootCategories.map((item) => getSuggestionCategory(item, 5))
  );

  const head = { title: category.name, requestURL: getRequestURL(req), description: category.name };

  return {
    props: {
      head,
      siteConfig,
      category,
      posts,
      categories: rootCategory.children as ICategory[],
      suggestionCategories,
      type: "category",
    },
  };
};

const getDetailPageProps = async (
  { categoryCode, postId, rootCategoryCode }: GetDetailPageParam,
  req: IncomingMessage
) => {
  const [siteConfig, category, posts, post, rootCategory, otherRootCategories] = await Promise.all([
    configService.getSiteConfig(),
    categoryService.getCategoryByCode(categoryCode),
    postService.getRandomPosts({ categoryCode: rootCategoryCode, expand: "category.parent", limit: 6 }),
    postService.getPostById(postId),
    categoryService.getCategoryByCode(rootCategoryCode, {
      expand: "children, children.parent, children.avatar",
    }),
    categoryService.getRootCategories({
      excludedCodes: [rootCategoryCode],
    }),
  ]);

  const suggestionCategories = await Promise.all(
    otherRootCategories.map((item) => getSuggestionCategory(item, 6))
  );

  const head = {
    title: post.title,
    requestURL: getRequestURL(req),
    description: decode(striptags(post.content)).slice(0, 200),
  };

  return {
    props: {
      head,
      siteConfig,
      category,
      posts,
      post,
      categories: rootCategory.children as ICategory[],
      suggestionCategories,
      type: "detail",
    },
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const { slug } = params as Record<string, string[]>;
  const firstSlug = slug.at(0);
  const lastSlug = slug.at(-1);
  const secondLastSlug = slug.at(-3);

  if (isInteger(Number(lastSlug))) {
    return getDetailPageProps(
      {
        categoryCode: secondLastSlug as string,
        rootCategoryCode: firstSlug as string,
        postId: Number(lastSlug),
      },
      req
    );
  }

  return getCategoryPageProps(
    {
      categoryCode: lastSlug as string,
      rootCategoryCode: firstSlug as string,
    },
    req
  );
};

export default PostCategoryOrDetailPage;
