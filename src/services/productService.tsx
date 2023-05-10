import { IBaseListQuery } from "@encacap-group/types/dist/base";
import { UNIT_PRICE_TYPE_ENUM } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { sample } from "lodash";
import { getHeroImages } from "./configService";

const fakeData: Partial<ProductDataType>[] = [
  {
    id: 1,
    name: "Foam PU chống cháy cao cấp",
    shortDescription:
      "Foam PU chống cháy cao cấp là sản phẩm cách nhiệt chống cháy được sản xuất trên dây chuyền công nghệ hiện đại, đạt tiêu chuẩn chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.",
    price: 100000,
    priceUnit: {
      id: 1,
      name: "đồng",
      type: UNIT_PRICE_TYPE_ENUM.PRICE,
    },
    quantityUnit: {
      id: 1,
      name: "m2",
      type: UNIT_PRICE_TYPE_ENUM.AREA,
    },
  },
  {
    id: 2,
    name: "Thép hình H",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi aliquam saepe, accusantium soluta modi repellat dolore amet consectetur excepturi sequi illum magni corporis cumque esse est laboriosam eos animi!",
    price: null,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getProducts = async (query?: IBaseListQuery) => {
  const images = await getHeroImages();

  return fakeData.map((item) => ({
    ...item,
    avatar: sample(images),
  }));
};

export { getProducts };
