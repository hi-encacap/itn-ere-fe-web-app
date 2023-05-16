import ServiceSuggestedProduct from "@components/Service/ServiceSuggestedProduct";
import { ProductDataType, ServiceDataType } from "@interfaces/dataTypes";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ProjectSuggestedService from "./ProjectSuggestedService";

interface ProjectSidebarProps extends HTMLAttributes<HTMLDivElement> {
  suggestedProducts: ProductDataType[];
  suggestedServices: ServiceDataType[];
}

const ProjectSidebar = ({ className, suggestedProducts, suggestedServices }: ProjectSidebarProps) => (
  <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
    <ServiceSuggestedProduct data={suggestedProducts} />
    <ProjectSuggestedService data={suggestedServices} />
  </div>
);

export default ProjectSidebar;
