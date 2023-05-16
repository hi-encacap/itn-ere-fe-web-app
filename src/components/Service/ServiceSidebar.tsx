import Contact from "@components/Common/Contact/Contact";
import { IContact } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ServiceSuggestedProduct from "./ServiceSuggestedProduct";

interface ServiceSidebarProps extends HTMLAttributes<HTMLDivElement> {
  suggestedProducts: ProductDataType[];
  contact?: IContact;
  contactClassName?: string;
}

const ServiceSidebar = ({ className, suggestedProducts, contact, contactClassName }: ServiceSidebarProps) => (
  <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
    {contact && <Contact data={contact} className={contactClassName} />}
    <ServiceSuggestedProduct data={suggestedProducts} />
  </div>
);

export default ServiceSidebar;
