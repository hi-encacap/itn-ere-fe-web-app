import { Key } from "react";

export const CONFIG_API_PATH = {
  CONFIGS_PATH: "v1/public/website-configs",
  CONFIG_PATH: (code: string) => `v1/public/website-configs/${code}`,
};

export const WEBSITE_API_PATH = {
  ME_PATH: "v1/public/websites/me",
};

export const CATEGORY_API_PATH = {
  CATEGORIES_PATH: "v1/public/categories",
  CATEGORY_PATH: (code: string) => `v1/public/categories/${code}`,
};

export const POST_API_PATH = {
  POSTS_PATH: "v1/public/posts",
  POST_PATH: (code: Key) => `v1/public/posts/${code}`,
};
