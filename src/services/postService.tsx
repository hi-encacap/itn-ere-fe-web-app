import { POST_API_PATH } from "@constants/apis";
import { IBaseListQuery } from "@encacap-group/common/dist/base";
import { ACBUILDING_CATEGORY_CODE_ENUM, IPost } from "@encacap-group/common/dist/re";
import axiosInstance from "@utils/axiosInstance";

const getPosts = async (query: IBaseListQuery): Promise<IPost[]> => {
  const response = await axiosInstance.get(POST_API_PATH.POSTS_PATH, {
    params: query,
  });

  return response.data.data;
};

const getProducts = async (query?: IBaseListQuery) => {
  return getPosts({
    ...query,
    rootCategoryCode: ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT,
  });
};

const getProjects = async (query?: IBaseListQuery) => {
  return getPosts({
    ...query,
    categoryCode: ACBUILDING_CATEGORY_CODE_ENUM.PROJECT,
  });
};

const getServices = async (query?: IBaseListQuery) => {
  return getPosts({
    ...query,
    categoryCode: ACBUILDING_CATEGORY_CODE_ENUM.SERVICE,
  });
};

const getRandomPosts = async (query: IBaseListQuery): Promise<IPost[]> => {
  const response = await axiosInstance.get(POST_API_PATH.RANDOM_POSTS_PATH, {
    params: query,
  });

  return response.data.data;
};

const getRandomProducts = async (query?: IBaseListQuery) => {
  return getRandomPosts({
    ...query,
    rootCategoryCode: ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT,
  });
};

const getRandomProjects = async (query?: IBaseListQuery) => {
  return getRandomPosts({
    ...query,
    categoryCode: ACBUILDING_CATEGORY_CODE_ENUM.PROJECT,
  });
};

const getRandomServices = async (query?: IBaseListQuery) => {
  return getRandomPosts({
    ...query,
    categoryCode: ACBUILDING_CATEGORY_CODE_ENUM.SERVICE,
  });
};

const getPostById = async (postId: number): Promise<IPost> => {
  const response = await axiosInstance.get(POST_API_PATH.POST_PATH(postId));

  return response.data.data;
};

export {
  getPostById,
  getPosts,
  getProducts,
  getProjects,
  getRandomPosts,
  getRandomProducts,
  getRandomProjects,
  getRandomServices,
  getServices,
};
