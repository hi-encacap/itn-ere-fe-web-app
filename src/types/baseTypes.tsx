import { ICloudflareImageResponse } from "@encacap-group/types/dist/re";
import { SiteConfigDataType } from "./dataTypes";

export interface BasePageProps {
  head: Record<string, string>;
  siteConfig: SiteConfigDataType;
  heroImages: ICloudflareImageResponse[];
}
