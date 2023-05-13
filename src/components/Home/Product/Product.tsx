import { ProductDataType } from "@interfaces/dataTypes";
import HomeSectionContainer from "../components/SectionContainer";
import HomeProductIntroduce from "./Introduce";
import HomeProductList from "./List";

interface HomeProductProps {
  data: ProductDataType[];
}

const HomeProduct = ({ data }: HomeProductProps) => (
  <HomeSectionContainer className="pl-4 pr-4 md:pr-6 lg:pr-10 xl:pl-24 xl:pr-48">
    <div className="grid gap-y-7 md:grid-cols-2 md:gap-y-0">
      <HomeProductIntroduce />
      <HomeProductList data={data} />
    </div>
  </HomeSectionContainer>
);

export default HomeProduct;
