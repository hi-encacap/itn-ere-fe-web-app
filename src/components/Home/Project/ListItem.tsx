import { ProjectDataType } from "@interfaces/dataTypes";
import { getProjectDetailLink } from "@utils/helper";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeProjectListItemProps {
  data: ProjectDataType;
}

const HomeProjectListItem = ({ data }: HomeProjectListItemProps) => (
  <HomeNewsItemContainer data={data} href={getProjectDetailLink(data)}>
    <div className="items-center justify-center px-4 py-3 md:px-6 md:py-4">
      <h3 className="line-clamp-2 text-center duration-100 group-hover:text-encacap-main">{data.name}</h3>
    </div>
  </HomeNewsItemContainer>
);

export default HomeProjectListItem;
