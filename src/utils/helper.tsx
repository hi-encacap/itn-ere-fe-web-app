import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { IncomingMessage } from "http";

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
    return `/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}/${category.code}/${product.code}/${product.id}`;
  }

  return `/${parent.code}/${category.code}/${product.code}/${product.id}`;
};

const getCategoryPageLink = (category: ICategory, parentParam?: ICategory): string => {
  const parent = (category.parent as ICategory) ?? parentParam;

  if (parent) {
    return `/${parent.code}/${category.code}`;
  }

  return `/${category.code}`;
};

const getPostDetailLink = (data: IPost): string => {
  const { category, code } = data;

  const categoryLink = getCategoryPageLink(category);

  return `${categoryLink}/${code}/${data.id}`;
};

const getRequestURL = (req: IncomingMessage) => {
  const rawRequestHost = req.headers.host;
  const requestHostWithWWW = rawRequestHost?.includes("www") ? rawRequestHost : `www.${rawRequestHost}`;
  const requestHost = `https://${requestHostWithWWW}`;
  const requestURL = req.url && `${requestHost}${req.url}`;

  return requestURL;
};

export {
  beautyMoney,
  beautyPhoneNumber,
  getCategoryPageLink,
  getPostDetailLink,
  getProductCategoryLink,
  getProductDetailLink,
  getRequestURL,
};
