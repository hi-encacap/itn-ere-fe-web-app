import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
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

const getCategoryPageLink = (category: ICategory): string => {
  const { code } = category;
  let { parent } = category;
  let link = `/${code}`;

  while (parent) {
    link = `/${parent.code}${link}`;
    parent = parent.parent;
  }

  return link;
};

const getPostDetailLink = (data: IPost | ProductDataType): string => {
  if (!("code" in data)) {
    const { category, handle } = data;

    if (!category) return "/";

    return `${getCategoryPageLink(category)}/${handle}/${data.id}`;
  }

  const { category, code } = data;

  const categoryLink = getCategoryPageLink(category);

  return `${categoryLink}/${code}/${data.id}`;
};

/**
 * @description add `www` to request host if it doesn't have.
 */
const addWWWToURL = (url: string) => {
  const urlObject = new URL(url);
  const { host } = urlObject;

  if (host.includes("www")) return url;

  urlObject.host = `www.${host}`;

  // Replace last `/` with empty string, because `toString()` method will add `/` to the end of url.
  return urlObject.toString().replace(/\/$/, "");
};

const getRequestURL = (req: IncomingMessage) => {
  const rawRequestHost = req.headers.host;
  const requestHostWithWWW = rawRequestHost?.includes("www") ? rawRequestHost : `www.${rawRequestHost}`;
  const requestHost = `https://${requestHostWithWWW}`;
  const requestURL = req.url && `${requestHost}${req.url}`;

  return requestURL;
};

export {
  addWWWToURL,
  beautyMoney,
  beautyPhoneNumber,
  getCategoryPageLink,
  getPostDetailLink,
  getProductCategoryLink,
  getProductDetailLink,
  getRequestURL,
};
