import { IWebsite } from "@encacap-group/types/dist/re";
import { ContactDataType } from "./dataTypes";

export interface BasePageProps {
  head: Record<string, string>;
  website: IWebsite;
  contact: ContactDataType;
}
