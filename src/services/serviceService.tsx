import { IBaseListQuery } from "@encacap-group/types/dist/base";
import { ServiceDataType } from "@interfaces/dataTypes";
import { sample } from "lodash";
import { getHeroImages } from "./configService";

const fakeData: Partial<ServiceDataType>[] = [
  {
    id: 1,
    name: "Phun PU Foam toàn quốc",
    shortDescription:
      "Xây dựng An Cường cung cấp dịch vụ phun PU Foam cách nhiệt, cách âm cho các công trình dân dụng, công nghiệp với chất lượng tốt, giá thành cạnh tranh và thời gian thi công nhanh nhất. Công nghệ phun PU Foam đang là giải pháp tiên tiến nhất hiện nay mang lại hiệu quả cách nhiệt tốt nhất, cách âm hoàn hảo.",
  },
  {
    id: 2,
    name: "Nhà ở dân dụng",
    shortDescription:
      "Xây dựng An Cường cung cấp dịch vụ xây dựng nhà ở dân dụng với chất lượng tốt, giá thành cạnh tranh và thời gian thi công nhanh nhất. Công nghệ xây dựng nhà ở dân dụng đang là giải pháp tiên tiến nhất hiện nay mang lại hiệu quả cách nhiệt tốt nhất, cách âm hoàn hảo.",
  },
  {
    id: 3,
    name: "Nhà thép tiền chế",
    shortDescription:
      "Chúng tôi cung cấp trọn gói cho khách hàng một cách hoàn hảo từ công tác thiết kế, sản xuất, lắp dựng nhà thép tiền chế, khung nhà thép tiền chế, chuyên thi công nhà thép tiền chế đến công tác bảo hành sau bán hàng.",
  },
  {
    id: 4,
    name: "Thi công nhà xưởng",
    shortDescription:
      "Chúng tôi tạo ra những khung xương vững chắc và hơn thế nữa. Với cam kết về chất lượng và giá thành, chúng tôi luôn mang đến cho khách hàng những sản phẩm tốt nhất.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getServices = async (query?: IBaseListQuery) => {
  const images = await getHeroImages();

  return fakeData.map((item) => ({
    ...item,
    avatar: sample(images),
  }));
};

export { getServices };
