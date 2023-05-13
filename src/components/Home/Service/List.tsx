import Button from "@components/Common/Button";
import { ServiceDataType } from "@interfaces/dataTypes";
import HomeServiceListItem from "./ListItem";
import HomeListItemSkeleton from "./ListItemSkeleton";

interface HomeServiceListProps {
  data: ServiceDataType[];
}

const HomeServiceList = ({ data }: HomeServiceListProps) => (
  <div className="flex flex-col space-y-6 md:space-y-10 lg:space-y-16">
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
      {data.map((item) => (
        <HomeServiceListItem key={item.id} data={item} />
      ))}
      {data.length < 6 &&
        Array.from({ length: 6 - data.length }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <HomeListItemSkeleton key={index} />
        ))}
    </div>
    <Button
      title="Xem tất cả dịch vụ"
      className="mx-auto block w-full rounded-md md:inline-block md:w-fit md:rounded-full"
    />
  </div>
);

export default HomeServiceList;
