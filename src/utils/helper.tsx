import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost, slugify } from "@encacap-group/common/dist/re";
import { ProjectDataType } from "@interfaces/dataTypes";

const beautyMoney = (money: number): string => money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/**
 * Beauty phone number from XXXXXXXXXX to XXXX XXX XXX
 * @param {String} phoneNumber
 */
const beautyPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.length !== 10) return phoneNumber;

  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)}`;
};

const getProductCategoryLink = (category: ICategory): string =>
  `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}/${category.code}`;

const getProductDetailLink = (product: IPost): string => {
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

const getServiceDetailLink = (data: IPost): string => {
  const { category } = data;

  return `/${category.code}/${data.code}/${data.id}`;
};

const getProjectDetailLink = (data: ProjectDataType): string => {
  const { category } = data;

  return `/${category.code}/${slugify(data.name)}/${data.id}`;
};

const getPostDetailLink = (data: IPost): string => {
  const { category, code } = data;

  return `/${category.code}/${code}/${data.id}`;
};

export {
  beautyMoney,
  beautyPhoneNumber,
  getCategoryPageLink,
  getPostDetailLink,
  getProductCategoryLink,
  getProductDetailLink,
  getProjectDetailLink,
  getServiceDetailLink,
};
