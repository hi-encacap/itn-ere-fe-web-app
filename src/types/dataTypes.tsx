import { BAOLOCRE_SITE_CONFIG_CODE_ENUM, IWebsite } from "@encacap-group/types/dist/re";

export interface SiteConfigDataType extends Record<BAOLOCRE_SITE_CONFIG_CODE_ENUM, string>, IWebsite {}
