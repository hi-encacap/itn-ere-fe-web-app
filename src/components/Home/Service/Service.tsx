import { IconBuilding, IconFoam, IconHouse, IconInsulation } from "@components/Common/Icon";
import HomeSectionContainer from "../components/SectionContainer";
import HomeSectionTitle from "../components/SectionTitle";
import HomeServiceItem from "./ServiceItem";

const HomeService = () => (
  <HomeSectionContainer className="px-0">
    <HomeSectionTitle title="Dịch vụ của chúng tôi" subtitle="Mọi thứ bạn cần" />
    <div className="grid grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-10 lg:px-0">
      <HomeServiceItem
        title="Xây dựng nhà dân dụng"
        icon={<IconHouse className="top-10 -mt-0.5 flex w-20" />}
      />
      <HomeServiceItem
        title="Xây dựng nhà tiền chế"
        icon={<IconBuilding className="top-12 ml-0.5 flex w-16" />}
      />
      <HomeServiceItem
        title="Thi công Foam cách nhiệt"
        icon={<IconFoam className="top-12 -mt-1.5 flex w-20" />}
      />
      <HomeServiceItem
        title="Phân phối vật liệu cách nhiệt"
        icon={<IconInsulation className="top-10 flex w-20" />}
      />
    </div>
  </HomeSectionContainer>
);

export default HomeService;
