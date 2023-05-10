import { ProductDataType } from "@interfaces/dataTypes";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import HomeProductListItem from "./ListItem";
import HomeProductViewButton from "./ViewButton";

interface HomeProductListProps extends HTMLAttributes<HTMLElement> {
  data: ProductDataType[];
}

const HomeProductList = ({ className, data }: HomeProductListProps) => (
  <div className={twMerge(className, "flex flex-col space-y-10 md:space-y-0")}>
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-10">
      {data.map((item) => (
        <HomeProductListItem data={item} key={item.id} />
      ))}
    </div>
    <HomeProductViewButton className="block w-full md:hidden" />
  </div>
);

export default HomeProductList;
