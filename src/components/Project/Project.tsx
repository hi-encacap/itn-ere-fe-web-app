import HomeProjectListItem from "@components/Home/Project/ListItem";
import { IPost } from "@encacap-group/common/dist/re";
import ProjectSidebar from "./ProjectSidebar";

export interface ProjectProps {
  projects: IPost[];
  suggestedProducts: IPost[];
  suggestedServices: IPost[];
}

const Project = ({ projects, suggestedProducts, suggestedServices }: ProjectProps) => (
  <>
    <div className="md:col-span-2 lg:col-span-3">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-10">
        {projects.map((item) => (
          <HomeProjectListItem data={item} key={item.id} />
        ))}
      </div>
    </div>
    <ProjectSidebar suggestedProducts={suggestedProducts} suggestedServices={suggestedServices} />
  </>
);

export default Project;
