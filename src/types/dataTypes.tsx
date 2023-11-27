import { ACB_CONFIG_CODE_ENUM, ICategory, IWebsite } from "@encacap-group/common/dist/re";

export interface SiteConfigDataType extends Record<ACB_CONFIG_CODE_ENUM, Record<string, unknown> | string> {
  website: IWebsite;
}

export interface ProductImageDataType {
  id: number;
  src: string;
}

export interface ProductVariantDataType {
  id: number;
  price: number;
  compareAtPrice: number;
  weightUnit: string;
}

export interface ProductDataType {
  id: number;
  title: string;
  bodyHtml: string;
  vendor: string;
  handle: string;
  images: ProductImageDataType[];
  image: ProductImageDataType;
  category: ICategory;
  variants: ProductVariantDataType[];
}
