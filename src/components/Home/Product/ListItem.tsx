import { ProductDataType } from "@interfaces/dataTypes";
import { getProductDetailLink } from "@utils/helper";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeProductListItemProps {
  data: ProductDataType;
}

const HomeProductListItem = ({ data }: HomeProductListItemProps) => (
  <HomeNewsItemContainer data={data} href={getProductDetailLink(data)}>
    <div className="px-4 py-3 md:px-6 md:py-5">
      <h3 className="line-clamp-2 font-semibold duration-100 group-hover:text-encacap-main">{data.name}</h3>
    </div>
  </HomeNewsItemContainer>
);

export default HomeProductListItem;
