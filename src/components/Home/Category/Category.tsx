import { IconBuilding, IconFoam, IconHouse, IconInsulation } from "@components/Common/Icon";
import HomeSectionContainer from "../components/SectionContainer";
import HomeSectionTitle from "../components/SectionTitle";
import HomeCategoryItem from "./Item";

const HomeCategory = () => (
  <HomeSectionContainer className="px-0">
    <HomeSectionTitle title="Dịch vụ của chúng tôi" subtitle="Mọi thứ bạn cần" />
    <div className="grid grid-cols-2 gap-y-2 px-2 md:gap-6 lg:grid-cols-4 lg:gap-10 lg:px-0">
      <HomeCategoryItem title="Xây dựng nhà dân dụng" icon={<IconHouse className="w-20" />} />
      <HomeCategoryItem title="Xây dựng nhà tiền chế" icon={<IconBuilding className="w-16" />} />
      <HomeCategoryItem title="Thi công Foam cách nhiệt" icon={<IconFoam className="w-20" />} />
      <HomeCategoryItem title="Phân phối vật liệu cách nhiệt" icon={<IconInsulation className="w-20" />} />
    </div>
  </HomeSectionContainer>
);

export default HomeCategory;
