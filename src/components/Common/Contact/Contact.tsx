import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, IContact, getImageURL } from "@encacap-group/types/dist/re";
import Image from "next/image";
import { IconPhoneRing } from "../Icon";

interface ContactProps {
  data: IContact;
}

const Contact = ({ data }: ContactProps) => (
  <div className="flex flex-col items-center justify-center rounded-lg px-4 py-10 ring-2 ring-gray-200 md:px-5">
    <div className="relative h-32 w-32 rounded-full bg-gray-200">
      <Image
        src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.SMALL)}
        alt={data.name}
        fill
        className="rounded-full object-cover object-center"
      />
    </div>
    <div className="mb-7 mt-6 font-semibold">{data.name}</div>
    <div className="flex cursor-pointer items-center justify-center space-x-4 rounded-full bg-gray-200 px-6 py-3 duration-100 hover:bg-encacap-main hover:text-white">
      <IconPhoneRing className="w-5" />
      <span className="ml-2">{data.phone}</span>
    </div>
  </div>
);

export default Contact;
