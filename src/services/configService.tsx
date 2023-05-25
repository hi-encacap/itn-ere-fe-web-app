import { CONFIG_API_PATH } from "@constants/apis";
import {
  ACBUILDING_SITE_CONFIG_CODE_ENUM,
  IConfig,
  SITE_CONFIG_CODE_ENUM,
} from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import axiosInstance from "@utils/axiosInstance";
import { getMyWebsite } from "./websiteService";

/**
 * Get general contact information
 * @returns {Promise<SiteConfigDataType>}
 */
const getSiteConfig = async (): Promise<SiteConfigDataType> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
    params: {
      codes: [
        SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION,
        SITE_CONFIG_CODE_ENUM.HOMEPAGE_SLIDER_IMAGE,
        ACBUILDING_SITE_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE,
      ],
    },
  });
  const websiteData = await getMyWebsite();
  const data = response.data.data.reduce((object: Record<string, unknown>, item: IConfig) => {
    if (!item.value) {
      return object;
    }

    // eslint-disable-next-line no-param-reassign
    object[item.code] = item.value;
    return object;
  }, {});
  data.website = websiteData;

  return data;
};

const getHeroImages = async () => {
  const response = await axiosInstance.get(
    CONFIG_API_PATH.CONFIG_PATH(SITE_CONFIG_CODE_ENUM.HOMEPAGE_SLIDER_IMAGE)
  );

  return response.data.data.value;
};

export { getHeroImages, getSiteConfig };
