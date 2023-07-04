import { IPost } from "@encacap-group/common/dist/re";
import { getPostDetailLink } from "@utils/helper";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeProjectListItemProps {
  data: IPost;
}

const HomeProjectListItem = ({ data }: HomeProjectListItemProps) => (
  <HomeNewsItemContainer data={data} href={getPostDetailLink(data)}>
    <div className="items-center justify-center px-4 py-3 md:px-6 md:py-4">
      <h3 className="line-clamp-2 text-center duration-100 group-hover:text-encacap-main">{data.title}</h3>
    </div>
  </HomeNewsItemContainer>
);

export default HomeProjectListItem;
