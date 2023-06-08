import Button from "@components/Common/Button";
import { ACBUILDING_CATEGORY_CODE_ENUM, IPost } from "@encacap-group/common/dist/re";
import HomeServiceListItem from "./ListItem";
import HomeListItemSkeleton from "./ListItemSkeleton";

interface HomeServiceListProps {
  data: IPost[];
}

const HomeServiceList = ({ data }: HomeServiceListProps) => (
  <div className="flex flex-col space-y-6 md:space-y-10 lg:space-y-20">
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
      href={`/${ACBUILDING_CATEGORY_CODE_ENUM.SERVICE}`}
    />
  </div>
);

export default HomeServiceList;
