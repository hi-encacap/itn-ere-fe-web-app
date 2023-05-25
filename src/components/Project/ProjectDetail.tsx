import HomeProjectListItem from "@components/Home/Project/ListItem";
import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, getImageURL } from "@encacap-group/common/dist/re";
import { ProductDataType, ProjectDataType, ServiceDataType } from "@interfaces/dataTypes";
import Image from "next/image";
import ProjectSidebar from "./ProjectSidebar";

interface ProjectDetailProps {
  suggestedServices: ServiceDataType[];
  suggestedProducts: ProductDataType[];
  projects: ProjectDataType[];
  data: ProjectDataType;
}

const ProjectDetail = ({ projects, data, suggestedProducts, suggestedServices }: ProjectDetailProps) => (
  <>
    <div className="md:col-span-2 lg:col-span-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC)}
          alt={data.name}
          fill
          sizes="100%"
          className="oject-center object-cover"
        />
      </div>
      <div className="pb-6 pt-4 md:pb-8 md:pt-8">
        <div className="text-encacap-main">{data.category.name}</div>
        <div className="mt-2 text-xl font-semibold md:mt-1 md:text-3xl">{data.name}</div>
      </div>
      <div className="border-t-2 border-gray-100 py-5">
        <div className="text-lg font-semibold">1. Thông tin chủ đầu tư</div>
        <div className="mt-3 flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <span>&#10003;</span>
            <span>Loại hình xây dựng: xây nhà trọn gói (chìa khóa trao tay)</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>&#10003;</span>
            <span>Chủ đầu tư: Công ty TNHH MTV Đầu tư và Phát triển Encacap Việt Nam</span>
          </div>
        </div>
        <div className="mt-3">
          Bọt xốp PU Foam cách nhiệt gồm 2 thành phần chủ yếu là Isocyanate và Polyol chuyên dụng trong hạng
          mục cách nhiệt, để cho ra sản phẩm dạng bọt xốp siêu nhẹ, không vị, không mùi, màu trắng ngà.
        </div>
        <div className="mt-3">
          Lớp bọt xốp PU Foam sẽ được phun lên trên bề mặt ở dạng lỏng, sau đó vài giây, nó sẽ nở đều đến độ
          dày theo như bản thiết kế và nhanh chóng đông kết thành dạng bọt cứng. Do đó, PU Foam cách nhiệt còn
          có một tên gọi khác là PU Foam closed cell.
        </div>
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC)}
            alt={data.name}
            fill
            sizes="100%"
            className="oject-center object-cover"
          />
        </div>
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC)}
            alt={data.name}
            fill
            sizes="100%"
            className="oject-center object-cover"
          />
        </div>
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
