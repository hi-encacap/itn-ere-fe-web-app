import { ServiceDataType } from "@interfaces/dataTypes";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeServiceListItemProps {
  data: ServiceDataType;
}

const HomeServiceListItem = ({ data }: HomeServiceListItemProps) => (
  <HomeNewsItemContainer
    data={data}
    className="group flex-row first:flex-col md:flex-col"
    imageClassName="w-28 md:w-full group-first:w-full"
  >
    <div className="px-4 py-4 md:px-6 md:py-5">
      <h3 className="font-semibold">{data.name}</h3>
      <p className="line-clamp-2 border-gray-100 pt-2 group-first:line-clamp-3 md:mt-4 md:line-clamp-3 md:border-t-2 md:pt-4">
        {data.shortDescription}
      </p>
      <div className="mt-4 hidden border-t-2 border-gray-100 pt-4 text-blue-500 hover:underline hover:underline-offset-4 md:block">
        Xem chi tiết
      </div>
    </div>
  </HomeNewsItemContainer>
);

export default HomeServiceListItem;
