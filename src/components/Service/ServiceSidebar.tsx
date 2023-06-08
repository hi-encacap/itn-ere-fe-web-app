import Contact from "@components/Common/Contact/Contact";
import { IPost } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ServiceSuggestedProduct from "./ServiceSuggestedProduct";

interface ServiceSidebarProps extends HTMLAttributes<HTMLDivElement> {
  suggestedProducts: IPost[];
  contactClassName?: string;
  siteConfig?: SiteConfigDataType;
}

const ServiceSidebar = ({
  className,
  suggestedProducts,
  siteConfig,
  contactClassName,
}: ServiceSidebarProps) => (
  <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
    {siteConfig && <Contact data={siteConfig} className={contactClassName} />}
    <ServiceSuggestedProduct data={suggestedProducts} />
  </div>
);

export default ServiceSidebar;
