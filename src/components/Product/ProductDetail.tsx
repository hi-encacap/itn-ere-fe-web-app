import Contact from "@components/Common/Contact/Contact";
import HomeProductListItem from "@components/Home/Product/ListItem";
import {
  DEFAULT_CLOUDFLARE_VARIANT_ENUM,
  ICategory,
  IPost,
  getImageURL,
} from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import { decode } from "html-entities";
import Image from "next/image";
import striptags from "striptags";
import ProductSidebar from "./ProductSidebar";

interface ProductDetailProps {
  data: IPost;
  relatedProducts: IPost[];
  siteConfig: SiteConfigDataType;
  categories: ICategory[];
}

const ProductDetail = ({ data, relatedProducts, siteConfig, categories }: ProductDetailProps) => (
  <>
    <div className="md:col-span-2 lg:col-span-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <Image
          src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC)}
          alt={data.title}
          fill
          sizes="100%"
          className="oject-center object-contain"
        />
      </div>
      <div className="pb-6 pt-4 md:pb-8 md:pt-8">
        <div className="text-encacap-main">{data.category.name}</div>
        <div className="mt-2 text-xl font-semibold md:text-3xl">{data.title}</div>
      </div>
      <div className="border-t-2 border-gray-100 py-5">
        <div className="text-xl font-bold">Mô tả</div>
        <div
          className="post-content mt-3 text-base text-gray-500"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <p className="hidden">{decode(striptags(data.content))}</p>
      </div>
      <div className="mt-2 border-t-2 border-gray-100 py-5 md:mt-3">
        <div className="mb-7 text-xl font-bold">Liên hệ ngay</div>
        <Contact data={siteConfig} isShowTitle={false} />
      </div>
      {relatedProducts.length > 0 && (
        <div className="mt-4 border-t-2 border-gray-100 pt-5 md:mt-3">
          <div className="text-xl font-bold">Có thể bạn quan tâm</div>
          <div className="mt-7 grid gap-4 md:col-span-2 md:grid-cols-3 md:gap-6 lg:col-span-3 lg:gap-8">
            {relatedProducts.map((item) => (
              <HomeProductListItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
    <ProductSidebar className="hidden flex-col md:flex" siteConfig={siteConfig} categories={categories} />
  </>
);

export default ProductDetail;
