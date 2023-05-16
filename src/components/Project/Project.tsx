import HomeProjectListItem from "@components/Home/Project/ListItem";
import { ProductDataType, ProjectDataType, ServiceDataType } from "@interfaces/dataTypes";
import ProjectSidebar from "./ProjectSidebar";

export interface ProjectProps {
  projects: ProjectDataType[];
  suggestedProducts: ProductDataType[];
  suggestedServices: ServiceDataType[];
}

const Project = ({ projects, suggestedProducts, suggestedServices }: ProjectProps) => (
  <>
    <div className="grid grid-cols-2 gap-4 md:col-span-2 md:gap-6 lg:col-span-3 lg:gap-10">
      {projects.map((item) => (
        <HomeProjectListItem data={item} key={item.id} />
      ))}
    </div>
    <ProjectSidebar suggestedProducts={suggestedProducts} suggestedServices={suggestedServices} />
  </>
);

export default Project;
