import { LayoutFooterColorEnum } from "@constants/enums";
import { ServiceDataType } from "@interfaces/dataTypes";
import HomeSectionContainer from "../components/SectionContainer";
import HomeSectionTitle from "../components/SectionTitle";
import HomeServiceList from "./List";

interface HomeServiceProps {
  data: ServiceDataType[];
}

const HomeService = ({ data }: HomeServiceProps) => (
  <HomeSectionContainer color={LayoutFooterColorEnum.DARK} className="flex flex-col justify-center space-y-8">
    <HomeSectionTitle title="Dịch vụ của chúng tôi" subtitle="Chất lượng & Phải chăng" />
    <HomeServiceList data={data} />
  </HomeSectionContainer>
);

export default HomeService;
