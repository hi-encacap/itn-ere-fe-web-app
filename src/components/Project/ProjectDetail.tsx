import HomeProjectListItem from "@components/Home/Project/ListItem";
import { IMAGE_VARIANT_ENUM, IPost, getImageURL } from "@encacap-group/common/dist/re";
import { decode } from "html-entities";
import Image from "next/image";
import striptags from "striptags";
import ProjectSidebar from "./ProjectSidebar";

interface ProjectDetailProps {
  suggestedServices: IPost[];
  suggestedProducts: IPost[];
  projects: IPost[];
  data: IPost;
}

const ProjectDetail = ({ projects, data, suggestedProducts, suggestedServices }: ProjectDetailProps) => (
  <>
    <div className="md:col-span-2 lg:col-span-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={getImageURL(data.avatar, IMAGE_VARIANT_ENUM.PUBLIC)}
          alt={data.title}
          fill
          sizes="100%"
          className="oject-center object-cover"
        />
      </div>
      <div className="pb-6 pt-4 md:pb-8 md:pt-8">
        <div className="text-encacap-main">{data.category.name}</div>
        <div className="mt-2 text-xl font-semibold md:mt-1 md:text-3xl">{data.title}</div>
      </div>
      <div className="border-t-2 border-gray-100 pb-4 pt-2">
        <div
          className="post-content mt-3 text-base text-gray-500"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <p className="hidden">{decode(striptags(data.content))}</p>
      </div>
      {projects.length > 0 && (
        <div className="-mx-4 mt-4 border-t-8 border-gray-100 px-4 pt-5 md:mx-0 md:mt-3 md:border-t-2 md:px-0">
          <div className="text-xl font-bold">Dự án khác</div>
          <div className="mt-6 grid gap-4 md:col-span-2 md:grid-cols-3 md:gap-6 lg:col-span-3 lg:gap-8">
            {projects.map((item) => (
              <HomeProjectListItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
    <ProjectSidebar suggestedProducts={suggestedProducts} suggestedServices={suggestedServices} />
  </>
);

export default ProjectDetail;
