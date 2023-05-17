import Contact from "@components/Common/Contact/Contact";
import HomeProductListItem from "@components/Home/Product/ListItem";
import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, ICategory, getImageURL } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import Image from "next/image";
import ProductSidebar from "./ProductSidebar";

interface ProductDetailProps {
  data: ProductDataType;
  relatedProducts: ProductDataType[];
}

const ProductDetail = ({ data, relatedProducts }: ProductDetailProps) => (
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
        <div className="text-xl font-bold">Mô tả</div>
        <div className="text-steal-700 mt-3">
          Hóa chất Polyols mã B-12H được thiết kế cho hệ thống bọt phun kín bằng polyurethane. Sản phẩm được
          ứng dụng rộng rãi trong cách nhiệt tường nhà, mái nhà và kho lạnh. Sử dụng polyol B-12H cho ra bọt
          xốp PU Foam có độ dẫn nhiệt thấp và độ kết dính cao, đặc biệt thi công ở các chân tường và mái nhà.
          Mức độ chống cháy cho bọt tạo thành là quá trình đốt cháy được sửa đổi theo phương pháp
          GB/T8624-2012 định mức – Hạng B2.
        </div>
        <div className="mt-4 font-semibold">CAM KẾT</div>
        <div className="-ml-0.5 mt-3 flex space-x-4">
          <span>✅</span>
          <span>Sản phẩm được nhập khẩu & phân phối từ các hãng có thương hiệu hàng đầu thế giới.</span>
        </div>
        <div className="-ml-0.5 mt-2 flex space-x-4">
          <span>✅</span>
          <span>Hàng luôn sẵn trong kho Hà Nội & Tp. Hồ Chí Minh, đáp ứng nhanh mọi nhu cầu của bạn.</span>
        </div>
      </div>
      <div className="mt-2 border-t-2 border-gray-100 py-5 md:mt-3">
        <div className="mb-7 text-xl font-bold">Liên hệ ngay</div>
        <Contact data={data.contact} isShowTitle={false} />
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
    <ProductSidebar
      className="hidden flex-col md:flex"
      category={data.category.parent as ICategory}
      contact={data.contact}
    />
  </>
);

export default ProductDetail;
