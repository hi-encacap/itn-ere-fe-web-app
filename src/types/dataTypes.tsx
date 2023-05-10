import {
  BAOLOCRE_SITE_CONFIG_CODE_ENUM,
  ICloudflareImageResponse,
  IUnitPrice,
  IWebsite,
} from "@encacap-group/types/dist/re";

export interface SiteConfigDataType extends Record<BAOLOCRE_SITE_CONFIG_CODE_ENUM, string>, IWebsite {}

export interface ProductDataType {
  id: number;
  name: string;
  avatar: ICloudflareImageResponse;
  shortDescription: string;
  description: string;
  price: number | null;
  maxPrice: number | null;
  priceUnit: IUnitPrice | null;
  maxPriceUnit: IUnitPrice | null;
  quantityUnit: IUnitPrice | null;
}
