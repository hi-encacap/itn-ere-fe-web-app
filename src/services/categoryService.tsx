import { CATEGORY_API_PATH } from "@constants/apis";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/common/dist/re";
import axiosInstance from "@utils/axiosInstance";

const getCategoryByCode = async (code: string = ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT) => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORY_PATH(code));

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

export { getCategoryByCode, getChildCategoryParentByCode };
