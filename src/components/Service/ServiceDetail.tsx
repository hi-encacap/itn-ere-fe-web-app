import Contact from "@components/Common/Contact/Contact";
import HomeServiceListItem from "@components/Home/Service/ListItem";
import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, getImageURL } from "@encacap-group/types/dist/re";
import { ProductDataType, ServiceDataType } from "@interfaces/dataTypes";
import Image from "next/image";
import ServiceSidebar from "./ServiceSidebar";

interface ServiceDetailProps {
  services: ServiceDataType[];
  suggestedProducts: ProductDataType[];
  data: ServiceDataType;
}

const ServiceDetail = ({ services, data, suggestedProducts }: ServiceDetailProps) => (
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
        <div className="text-steal-700 mt-1">
          An Cường cung cấp dịch vụ phun PU Foam Cách nhiệt, cách âm cho các công trình dân dụng, công nghiệp
          với chất lượng tốt, giá thành cạnh tranh và thời gian thi công nhanh nhất. Công nghệ phun PU Foam
          đang là giải pháp tiên tiến nhất hiện nay mang lại hiệu quả cách nhiệt tốt nhất, cách âm hoàn hảo.
          Bài viết dưới đây, chúng tôi sẽ giới thiệu 02 dịch vụ phun PU Foam được nhiều người ưa chuộng nhất
          hiện nay!
        </div>
        <div className="mt-4 text-lg font-semibold">1. DỊCH VỤ PHUN PU FOAM CÁCH NHIỆT – CHỐNG NÓNG</div>
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
        <div className="mt-5">Ưu điểm của giải pháp phun PU Foam cách nhiệt là:</div>
        <div className="-ml-0.5 mt-3 flex space-x-4">
          <span>✅</span>
          <span>
            <span className="font-semibold">Khả năng siêu cách nhiệt:</span> PU Foam có hệ số dẫn nhiệt siêu
            thấp nhất trong các dòng vật liệu kể trên, khoảng 0.0182 W/m.K. Cách nhiệt gần như tuyệt đối, đảm
            bảo cho ngôi nhà giữ được không gian mát mẻ dù ngoài trời nắng nóng cực điểm.
          </span>
        </div>
        <div className="-ml-0.5 mt-3 flex space-x-4">
          <span>✅</span>
          <span>
            <span className="font-semibold">Thi công nhanh gọn:</span> Thời gian thi công nhanh, đảm bảo tiến
            độ công trình.
          </span>
        </div>
      </div>
      <div className="mt-2 border-t-2 border-gray-100 py-5 md:mt-3">
        <div className="mb-7 text-xl font-bold">Liên hệ ngay</div>
        <Contact data={data.contact} isShowTitle={false} />
      </div>
      {services.length > 0 && (
        <div className="-mx-4 mt-4 border-t-8 border-gray-100 px-4 pt-5 md:mx-0 md:mt-3 md:border-t-2 md:px-0">
          <div className="text-xl font-bold">Dịch vụ khác</div>
          <div className="mt-6 grid gap-4 md:col-span-2 md:grid-cols-3 md:gap-6 lg:col-span-3 lg:gap-8">
            {services.map((item) => (
              <HomeServiceListItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
    <ServiceSidebar
      suggestedProducts={suggestedProducts}
      contact={data.contact}
      contactClassName="hidden md:block"
    />
  </>
);

export default ServiceDetail;
