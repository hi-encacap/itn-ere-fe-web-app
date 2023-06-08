import ServiceSuggestedProduct from "@components/Service/ServiceSuggestedProduct";
import { IPost } from "@encacap-group/common/dist/re";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ProjectSuggestedService from "./ProjectSuggestedService";

interface ProjectSidebarProps extends HTMLAttributes<HTMLDivElement> {
  suggestedProducts: IPost[];
  suggestedServices: IPost[];
}

const ProjectSidebar = ({ className, suggestedProducts, suggestedServices }: ProjectSidebarProps) => (
  <div className={twMerge(className, "space-y-4 md:space-y-6 lg:space-y-10")}>
    <ServiceSuggestedProduct data={suggestedProducts} />
    <ProjectSuggestedService data={suggestedServices} />
  </div>
);

export default ProjectSidebar;
