import { CONFIG_API_PATH } from "@constants/apis";
import { BAOLOCRE_SITE_CONFIG_CODE_ENUM, IConfig } from "@encacap-group/types/dist/re";
import { ContactDataType } from "@interfaces/dataTypes";
import axiosInstance from "@utils/axiosInstance";
import { set } from "lodash";

/**
 * Get general contact information
 * @returns {Promise<ContactDataType>}
 */
const getContact = async (): Promise<ContactDataType> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIGS_PATH, {
    params: {
      codes: [
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.NAME,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.PHONE_NUMBER,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.ZALO,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.FACEBOOK,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.YOUTUBE,
        BAOLOCRE_SITE_CONFIG_CODE_ENUM.ADDRESS,
      ],
    },
  });

  return response.data.data.reduce((config: ContactDataType, item: IConfig) => {
    set(config, item.code, item.value);
    return config;
  }, {} as ContactDataType);
};

const getSiteName = async (): Promise<string> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIG_PATH(BAOLOCRE_SITE_CONFIG_CODE_ENUM.NAME));

  return response.data.data.value;
};

export { getContact, getSiteName };
