import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, slugify } from "@encacap-group/types/dist/re";
import { ProductDataType, ServiceDataType } from "@interfaces/dataTypes";

const beautyMoney = (money: number): string => money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const getProductCategoryLink = (category: ICategory): string =>
  `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}/${category.code}`;

const getProductDetailLink = (product: ProductDataType): string => {
  const { category } = product;

  if (!category) return "/";

  const parent = category?.parent as ICategory;

  if (!parent) {
    return `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}/${category.code}/day-la-slug-cua-bai-viet/${product.id}`;
  }

  return `/${parent.code}/${category.code}/day-la-slug-cua-bai-viet/${product.id}`;
};

const getCategoryPageLink = (category: ICategory, parentParam?: ICategory): string => {
  const parent = (category.parent as ICategory) ?? parentParam;

  if (parent) {
    return `/${parent.code}/${category.code}`;
  }

  return `/${category.code}`;
};

const getServiceDetailLink = (data: ServiceDataType): string => {
  const { category } = data;

  return `/${category.code}/${slugify(data.name)}/${data.id}`;
};

export {
  beautyMoney,
  getCategoryPageLink,
  getProductCategoryLink,
  getProductDetailLink,
  getServiceDetailLink,
};
