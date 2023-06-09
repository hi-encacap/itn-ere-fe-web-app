import { LayoutFooterColorEnum } from "@constants/enums";
import { ICloudflareImageResponse, IPost } from "@encacap-group/common/dist/re";
import HomeSectionContainer from "../components/SectionContainer";
import HomeIntroduceConfession from "./Confession";
import HomeIntroduceImage from "./Image";

interface HomeIntroduceProps {
  images: ICloudflareImageResponse[];
  data: IPost;
}

const HomeIntroduce = ({ images, data }: HomeIntroduceProps) => (
  <HomeSectionContainer
    color={LayoutFooterColorEnum.DARK}
    className="pl-4 pr-4 md:pl-6 lg:pl-10 xl:pl-48 xl:pr-24"
  >
    <div className="grid gap-y-8 md:grid-cols-5 md:gap-y-0">
      <HomeIntroduceImage data={images} className="md:col-span-2" />
      <HomeIntroduceConfession className="md:col-span-3" data={data} />
    </div>
  </HomeSectionContainer>
);

export default HomeIntroduce;
