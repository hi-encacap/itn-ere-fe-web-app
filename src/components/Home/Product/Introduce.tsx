import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../Common/Button";
import HomeSectionTitle from "../components/SectionTitle";

const HomeProductIntroduce = ({ className }: HTMLAttributes<HTMLElement>) => (
  <div
    className={twMerge(
      "flex flex-col items-center justify-center space-y-10 md:pr-6 lg:pr-10 xl:pr-24",
      className
    )}
  >
    <HomeSectionTitle title="Sản phẩm cách nhiệt" subtitle="Chất lượng tốt nhất" />
    <p className="text-center leading-6">
      Công ty TNHH xây dựng An Cường cam kết mang đến cho khách hàng những sản phẩm cách nhiệt chất lượng với
      mức giá cạnh tranh nhất.
    </p>
    <Button title="Xem tất cả sản phẩm" className="hidden md:block" />
  </div>
);

export default HomeProductIntroduce;
