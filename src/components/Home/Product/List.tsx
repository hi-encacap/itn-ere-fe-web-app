import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/common/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../Common/Button";
import HomeProductListItem from "./ListItem";

interface HomeProductListProps extends HTMLAttributes<HTMLElement> {
  data: ProductDataType[];
}

const HomeProductList = ({ className, data }: HomeProductListProps) => (
  <div className={twMerge(className, "flex flex-col space-y-6 md:space-y-0")}>
    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-10">
      {data.map((item) => (
        <HomeProductListItem data={item} key={item.id} />
      ))}
    </div>
    <Button
      title="Xem tất cả sản phẩm"
      className="block w-full rounded-md md:hidden"
      href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT}`}
    />
  </div>
);

export default HomeProductList;
