import { CONFIG_API_PATH } from "@constants/apis";
import { BAOLOCRE_SITE_CONFIG_CODE_ENUM, IConfig } from "@encacap-group/types/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import axiosInstance from "@utils/axiosInstance";
import { set } from "lodash";
import { getMyWebsite } from "./websiteService";

/**
 * Get general contact information
 * @returns {Promise<SiteConfigDataType>}
 */
const getSiteConfig = async (): Promise<SiteConfigDataType> => {
  const {
    data: { data },
  } = await axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
    params: {
      codes: [BAOLOCRE_SITE_CONFIG_CODE_ENUM.PHONE_NUMBER, BAOLOCRE_SITE_CONFIG_CODE_ENUM.ADDRESS],
    },
  });
  const websiteData = await getMyWebsite();

  const siteConfig: SiteConfigDataType = data.reduce((config: SiteConfigDataType, item: IConfig) => {
    set(config, item.code, item.value);
    return config;
  }, {});

  siteConfig.name = websiteData.name;

  return siteConfig;
};

const getHeroImages = async () => {
  const response = await axiosInstance.get(
    CONFIG_API_PATH.CONFIG_PATH(BAOLOCRE_SITE_CONFIG_CODE_ENUM.HOMEPAGE_SLIDER_IMAGES)
  );

  return response.data.data.value;
};

export { getHeroImages, getSiteConfig };
