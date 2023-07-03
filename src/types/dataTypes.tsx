import { ACB_CONFIG_CODE_ENUM, IWebsite } from "@encacap-group/common/dist/re";

export interface SiteConfigDataType extends Record<ACB_CONFIG_CODE_ENUM, Record<string, unknown> | string> {
  website: IWebsite;
}
