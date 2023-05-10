import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, getImageURL } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { beautyMoney } from "@utils/helper";
import Image from "next/image";

interface HomeProductListItemProps {
  data: ProductDataType;
}

const HomeProductListItem = ({ data }: HomeProductListItemProps) => (
  <div className="group flex cursor-pointer flex-col overflow-hidden rounded-xl shadow-md shadow-gray-200 duration-100 hover:shadow-gray-300">
    <div className="relative aspect-video w-full">
      <Image
        src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
        alt={data.name}
        fill
        sizes="100%"
      />
    </div>
    <div className="px-6 py-5">
      <h3 className="font-semibold text-encacap-main">{data.name}</h3>
      <div className="mt-1">
        {data.price && data.priceUnit && data.quantityUnit && (
          <span>
            {beautyMoney(data.price)} {data.priceUnit.name} / {data.quantityUnit.name}
          </span>
        )}
        {!data.price && <span>Giá thoả thuận</span>}
      </div>
      <p className="mt-5 line-clamp-4 flex-1 border-t-2 border-gray-100 pt-4">{data.shortDescription}</p>
      <div className="relative mt-3 text-blue-500 hover:underline hover:underline-offset-4">
        <span className="mr-4">Xem chi tiết</span>
        <span className="absolute top-1/2 mt-px h-px w-12 -translate-y-1/2 bg-blue-500" />
      </div>
    </div>
  </div>
);

export default HomeProductListItem;
