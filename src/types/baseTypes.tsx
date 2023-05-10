import { SiteConfigDataType } from "./dataTypes";

export interface BasePageProps {
  head: Record<string, string>;
  siteConfig: SiteConfigDataType;
}
