import { ICloudflareImageResponse, IMAGE_VARIANT_ENUM, getImageURL } from "@encacap-group/common/dist/re";
import { first, last, sample } from "lodash";
import Image from "next/image";
import { HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface HomeIntroduceImageProps extends HTMLAttributes<HTMLDivElement> {
  data: ICloudflareImageResponse[];
}

const HomeIntroduceImage = ({ data, className }: HomeIntroduceImageProps) => {
  const firstImage = useMemo(() => first(data), [data]);
  const secondImage = useMemo(() => data[1] || sample(data), [data]);
  const thirdImage = useMemo(() => last(data), [data]);

  if (!firstImage || !secondImage || !thirdImage) {
    return null;
  }

  return (
    <div className={twMerge("grid grid-cols-12 gap-4", className)}>
      <div className="col-span-7 flex flex-col items-end space-y-4">
        <div className="h-14 w-full md:h-20 lg:h-28" />
        <div className="relative aspect-video w-full bg-gray-100">
          <Image
            src={getImageURL(firstImage, IMAGE_VARIANT_ENUM.MEDIUM)}
            alt={firstImage.id}
            fill
            sizes="100%"
            className="rounded-lg object-cover object-center md:rounded-3xl"
          />
        </div>
        <div className="relative aspect-video w-2/3">
          <Image
            src={getImageURL(secondImage, IMAGE_VARIANT_ENUM.MEDIUM)}
            alt={secondImage.id}
            fill
            sizes="100%"
            className="rounded-lg object-cover object-center md:rounded-3xl"
          />
        </div>
      </div>
      <div className="col-span-5">
        <div className="relative aspect-video-reverse">
          <Image
            src={getImageURL(thirdImage, IMAGE_VARIANT_ENUM.MEDIUM)}
            alt={thirdImage.id}
            fill
            sizes="100%"
            className="rounded-lg object-cover object-center md:rounded-3xl"
          />
        </div>
        <div className="w-full md:h-16" />
      </div>
    </div>
  );
};

export default HomeIntroduceImage;
