import Logo from "@components/Common/Logo";
import { ICloudflareImageResponse, getImageURL } from "@encacap-group/types/dist/re";
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
      className="object-cover object-center"
      priority={isPriority}
      sizes="100%"
    />
    <div className="absolute bottom-5 left-6">
      <Logo isPriority={isPriority} />
    </div>
  </>
);

export default HomeHeroSliderItem;
