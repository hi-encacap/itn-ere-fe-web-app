import Button from "@components/Common/Button";
import { ACBUILDING_CATEGORY_CODE_ENUM, IPost } from "@encacap-group/common/dist/re";
import HomeListItemSkeleton from "../Service/ListItemSkeleton";
import HomeProjectListItem from "./ListItem";

interface HomeProjectListProps {
  data: IPost[];
}

const HomeProjectList = ({ data }: HomeProjectListProps) => (
  <div className="flex flex-col space-y-6 md:space-y-10 lg:space-y-20">
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
      {data.map((item) => (
        <HomeProjectListItem key={item.id} data={item} />
      ))}
      {data.length < 6 &&
        Array.from({ length: 6 - data.length }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <HomeListItemSkeleton key={index} className="bg-gray-100 shadow-none" />
        ))}
    </div>
    <Button
      title="Xem tất cả dự án"
      className="mx-auto block w-full rounded-md md:inline-block md:w-fit md:rounded-full"
      href={`/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`}
    />
  </div>
);

export default HomeProjectList;
