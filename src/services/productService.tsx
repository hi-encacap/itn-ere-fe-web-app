import { IBaseListQuery } from "@encacap-group/types/dist/base";
import { UNIT_PRICE_TYPE_ENUM } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { sample } from "lodash";
import { getHeroImages } from "./configService";

const fakeData: Partial<ProductDataType>[] = [
  {
    id: 1,
    name: "Foam PU chống cháy cao cấp",
    price: 100000,
    maxPrice: 1000000,
    priceUnit: {
      id: 1,
      name: "đồng",
      type: UNIT_PRICE_TYPE_ENUM.PRICE,
    },
    quantityUnit: {
      id: 2,
      name: "kg",
      type: UNIT_PRICE_TYPE_ENUM.AREA,
    },
  },
  {
    id: 2,
    name: "Đây là sản phẩm thứ hai",
    price: null,
  },
  {
    id: 3,
    name: "Đây là sản phẩm thứ ba",
    price: null,
  },
  {
    id: 4,
    name: "Đây là sản phẩm thứ tư",
    price: 200000,
    priceUnit: {
      id: 1,
      name: "đồng",
      type: UNIT_PRICE_TYPE_ENUM.PRICE,
    },
    quantityUnit: {
      id: 3,
      name: "tấn",
      type: UNIT_PRICE_TYPE_ENUM.AREA,
    },
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
