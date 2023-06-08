import { IPost } from "@encacap-group/common/dist/re";
import HomeSectionContainer from "../components/SectionContainer";
import HomeSectionTitle from "../components/SectionTitle";
import HomeProjectList from "./List";

interface HomeProjectProps {
  data: IPost[];
}

const HomeProject = ({ data }: HomeProjectProps) => (
  <HomeSectionContainer className="flex flex-col justify-center space-y-8">
    <HomeSectionTitle title="Dự án đã thực hiện" subtitle="Uy tín & Chất lượng" />
    <HomeProjectList data={data} />
  </HomeSectionContainer>
);

export default HomeProject;
