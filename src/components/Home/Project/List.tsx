import Button from "@components/Common/Button";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { ProjectDataType } from "@interfaces/dataTypes";
import HomeListItemSkeleton from "../Service/ListItemSkeleton";
import HomeProjectListItem from "./ListItem";

interface HomeProjectListProps {
  data: ProjectDataType[];
}

const HomeProjectList = ({ data }: HomeProjectListProps) => (
  <div className="flex flex-col space-y-6 md:space-y-10 lg:space-y-16">
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
      {data.map((item) => (
        <HomeProjectListItem key={item.id} data={item} />
      ))}
      {data.length < 6 &&
        Array.from({ length: 6 - data.length }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <HomeListItemSkeleton key={index} />
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
