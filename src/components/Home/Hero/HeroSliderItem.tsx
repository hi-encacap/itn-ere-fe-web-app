import Logo from "@components/Common/Logo";
import { ICloudflareImageResponse, getImageURL } from "@encacap-group/common/dist/re";
import Image from "next/image";

interface HomeHeroSliderItemProps {
  data: ICloudflareImageResponse;
  isPriority: boolean;
}

const HomeHeroSliderItem = ({ data, isPriority = false }: HomeHeroSliderItemProps) => (
  <>
    <Image
      src={getImageURL(data)}
      alt={data.id}
      fill
      className="bg-gray-100 object-cover object-center"
      priority={isPriority}
      sizes="100%"
    />
    <div className="absolute bottom-4 left-6">
      <Logo isPriority={isPriority} />
    </div>
  </>
);

export default HomeHeroSliderItem;
