import {
  ACBUILDING_SITE_CONFIG_CODE_ENUM,
  ICategory,
  ICloudflareImageResponse,
  IContact,
  SITE_CONFIG_CODE_ENUM,
} from "@encacap-group/common/dist/re";

export type SiteConfigDataType = Record<
  SITE_CONFIG_CODE_ENUM | ACBUILDING_SITE_CONFIG_CODE_ENUM | string,
  Record<string, unknown>
>;

export interface ProductDataType {
  id: number;
  name: string;
  avatar: ICloudflareImageResponse;
  description: string;
  category: ICategory;
  categoryId: number;
  images: ICloudflareImageResponse[];
  contact: IContact;
}

export interface ServiceDataType {
  id: number;
  name: string;
  avatar: ICloudflareImageResponse;
  description: string;
  shortDescription: string;
  category: ICategory;
  contact: IContact;
}

export interface ProjectDataType {
  id: number;
  name: string;
  avatar: ICloudflareImageResponse;
  description: string;
  category: ICategory;
}
