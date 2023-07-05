import { IImageResponse, IMAGE_VARIANT_ENUM, getImageURL } from "@encacap-group/common/dist/re";
import Image from "next/image";

interface CategoryAvatarProps {
  image: IImageResponse;
  title: string;
}

const CategoryAvatar = ({ image, title }: CategoryAvatarProps) => {
  return (
    <div className="relative aspect-square w-24 overflow-hidden rounded-full">
      <Image
        src={getImageURL(image, IMAGE_VARIANT_ENUM.THUMBNAIL)}
        alt={title}
        fill
        sizes="128px"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default CategoryAvatar;
