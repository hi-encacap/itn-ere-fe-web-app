import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import HomeSectionTitle from "../components/SectionTitle";

const HomeIntroduceConfession = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      "flex flex-col items-center justify-center space-y-4 md:pl-6 lg:pl-10 xl:pl-24",
      className
    )}
  >
    <HomeSectionTitle title="Xây dựng An Cường" subtitle="Về chúng tôi" />
    <div className="text-center leading-6">
      Công ty TNHH xây dựng An Cường xin gửi lời cảm ơn sâu sắc đến Quý khách hàng đã và đang quan tâm, tin
      tưởng sử dụng các dịch vụ thiết kế và thi công xây dựng nhà của chúng tôi.
    </div>
    <div className="cursor-pointer rounded-full border-2 border-encacap-main bg-white px-6 py-3 font-semibold text-encacap-main duration-100 hover:bg-encacap-main hover:text-white">
      Liên hệ công tác
    </div>
  </div>
);

export default HomeIntroduceConfession;
