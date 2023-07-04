import { ICategory, IMAGE_VARIANT_ENUM, IPost, getImageURL } from "@encacap-group/common/dist/re";
import Image from "next/image";
import Layout, { LayoutProps } from "./Layout";
import LayoutBreadcrumb from "./components/Breadcrumb/Breadcrumb";
import { LayoutBreadcrumbItemType } from "./components/Breadcrumb/BreadcrumbItem";

export interface CategoryLayoutProps extends LayoutProps {
  title?: string;
  data: ICategory | IPost;
  breadcrumbItems: Array<LayoutBreadcrumbItemType | boolean>;
}

const PostLayout = ({
  title,
  head,
  websiteConfig: siteConfig,
  data,
  children,
  breadcrumbItems,
}: CategoryLayoutProps) => (
  <Layout head={head} websiteConfig={siteConfig}>
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src={getImageURL(data.avatar, IMAGE_VARIANT_ENUM.THUMBNAIL)}
          alt={"title" in data ? data.title : data.name}
          fill
          sizes="100%"
          quality={100}
          className="oject-center object-cover"
        />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-encacap-secondary bg-opacity-95 px-4 py-8 md:py-10 lg:py-16">
        <div className="text-center text-2xl font-bold uppercase leading-10 text-white md:text-3xl">
          {title ?? ("title" in data ? data.title : data.name)}
        </div>
        <LayoutBreadcrumb items={breadcrumbItems} />
      </div>
    </div>
    <div className="grid gap-4 px-4 py-4 md:grid-cols-3 md:gap-6 md:px-6 md:py-6 lg:grid-cols-4 lg:gap-10 lg:px-10 lg:py-10 xl:px-48 xl:py-20">
      {children}
    </div>
  </Layout>
);

export default PostLayout;
