import { WEBSITE_API_PATH } from "@constants/apis";
import axiosInstance from "@utils/axiosInstance";

const getMyWebsite = async () => {
  const response = await axiosInstance.get(WEBSITE_API_PATH.ME_PATH);
  return response.data.data;
};

// eslint-disable-next-line import/prefer-default-export
export { getMyWebsite };
