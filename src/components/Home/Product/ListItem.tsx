import { ProductDataType } from "@interfaces/dataTypes";
import { beautyMoney } from "@utils/helper";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeProductListItemProps {
  data: ProductDataType;
}

const HomeProductListItem = ({ data }: HomeProductListItemProps) => (
  <HomeNewsItemContainer data={data}>
    <div className="px-4 py-3 md:px-6 md:py-5">
      <h3 className="font-semibold text-encacap-main">{data.name}</h3>
      <div className="mt-1">
        {data.price && data.priceUnit && data.quantityUnit && (
          <span>
            {beautyMoney(data.price)} {data.maxPrice && ` - ${beautyMoney(data.maxPrice)}`}{" "}
            {data.priceUnit.name} / {data.quantityUnit.name}
          </span>
        )}
        {!data.price && <span>Giá liên hệ</span>}
      </div>
    </div>
  </HomeNewsItemContainer>
);

export default HomeProductListItem;
