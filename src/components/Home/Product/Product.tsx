import { ProductDataType } from "@interfaces/dataTypes";
import HomeSectionContainer from "../components/SectionContainer";
import HomeProductIntroduce from "./Introduce";
import HomeProductList from "./List";

interface HomeProductProps {
  data: ProductDataType[];
}

const HomeProduct = ({ data }: HomeProductProps) => (
  <HomeSectionContainer className="py-16 pl-4 pr-4 md:pr-6 lg:pr-10 xl:pl-24 xl:pr-48">
    <div className="grid gap-y-10 md:grid-cols-5 md:gap-y-0">
      <HomeProductIntroduce className="md:col-span-2" />
      <HomeProductList data={data} className="md:col-span-3" />
    </div>
  </HomeSectionContainer>
);

export default HomeProduct;
