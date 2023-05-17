import {
  ACBUILDING_SITE_CONFIG_CODE_ENUM,
  ICategory,
  ICloudflareImageResponse,
  IContact,
  IWebsite,
} from "@encacap-group/types/dist/re";

export interface SiteConfigDataType extends Record<ACBUILDING_SITE_CONFIG_CODE_ENUM, string>, IWebsite {}

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
