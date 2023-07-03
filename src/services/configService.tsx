import { CONFIG_API_PATH } from "@constants/apis";
import { ACB_CONFIG_CODE_ENUM, IWebsiteConfig } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import axiosInstance from "@utils/axiosInstance";
import { set } from "lodash";
import { getMyWebsite } from "./websiteService";

/**
 * Get general contact information
 * @returns {Promise<SiteConfigDataType>}
 * @deprecated
 */
const getSiteConfig = async (): Promise<SiteConfigDataType> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
    params: {
      codes: [ACB_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE],
    },
  });
  const websiteData = await getMyWebsite();
  const data = response.data.data.reduce((object: Record<string, unknown>, item: IWebsiteConfig) => {
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

/**
 * @deprecated
 */
const getHeroImages = async () => {
  const response = await axiosInstance.get(
    CONFIG_API_PATH.CONFIG_PATH(ACB_CONFIG_CODE_ENUM.HOMEPAGE_HERO_IMAGE)
  );

  return response.data.data.value;
};

const getCommonWebsiteConfig = async () => {
  const [configRes, websiteData] = await Promise.all([
    axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
      params: {
        codes: [
          ACB_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE,
          ACB_CONFIG_CODE_ENUM.PHONE_NUMBER,
          ACB_CONFIG_CODE_ENUM.EMAIL_ADDRESS,
          ACB_CONFIG_CODE_ENUM.ADDRESS,
          ACB_CONFIG_CODE_ENUM.BANK_ACCOUNT,
          ACB_CONFIG_CODE_ENUM.TAX_NUMBER,
        ],
      },
    }),
    getMyWebsite(),
  ]);

  const data = configRes.data.data.reduce(
    (object: Record<ACB_CONFIG_CODE_ENUM, unknown>, item: IWebsiteConfig) => {
      if (!item.value) {
        return object;
      }

      // eslint-disable-next-line no-param-reassign
      object[item.code as ACB_CONFIG_CODE_ENUM] = item.value;
      return object;
    },
    {}
  );

  set(data, "website", websiteData);

  return data;
};

const getHomepageConfigs = async (): Promise<IWebsiteConfig[]> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
    params: {
      codes: [
        ACB_CONFIG_CODE_ENUM.HOMEPAGE_HERO_IMAGE,
        ACB_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_IMAGE,
        ACB_CONFIG_CODE_ENUM.HOMEPAGE_INTRODUCE_POST,
      ],
    },
  });

  return response.data.data;
};

export { getCommonWebsiteConfig, getHeroImages, getHomepageConfigs, getSiteConfig };
