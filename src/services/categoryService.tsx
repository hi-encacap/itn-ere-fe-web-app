import { CATEGORY_API_PATH } from "@constants/apis";
import { IBaseListQuery } from "@encacap-group/common/dist/base";
import { ICategory } from "@encacap-group/common/dist/re";
import axiosInstance from "@utils/axiosInstance";

const getCategoryByCode = async (code: string, query?: IBaseListQuery) => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORY_PATH(code), {
    params: {
      expand: "avatar, parent",
      ...query,
    },
  });

  return response.data.data;
};

const getChildCategoryParentByCode = async (code: string) => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORIES_PATH, {
    params: {
      parentCode: code,
    },
  });

  return response.data.data;
};

const getCategories = async (query?: IBaseListQuery): Promise<ICategory[]> => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORIES_PATH, {
    params: query,
  });

  return response.data.data;
};

const getRootCategories = async (query?: IBaseListQuery): Promise<ICategory[]> => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.ROOT_CATEGORIES_PATH, {
    params: query,
  });

  return response.data.data;
};

export { getCategories, getCategoryByCode, getChildCategoryParentByCode, getRootCategories };
