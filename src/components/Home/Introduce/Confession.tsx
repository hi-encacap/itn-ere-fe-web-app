import Button from "@components/Common/Button";
import { IPost } from "@encacap-group/common/dist/re";
import { getPostDetailLink } from "@utils/helper";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import striptags from "striptags";
import { twMerge } from "tailwind-merge";
import HomeSectionTitle from "../components/SectionTitle";

interface HomeIntroduceConfessionProps extends HTMLAttributes<HTMLDivElement> {
  data: IPost;
}

const HomeIntroduceConfession = ({ className, data }: HomeIntroduceConfessionProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center space-y-5 md:space-y-10 md:pl-6 lg:pl-10 xl:pl-24",
        className
      )}
    >
      <HomeSectionTitle title="Xây dựng An Cường" subtitle="Về chúng tôi" />
      <div className="introduce-content text-center leading-6">
        {parse(striptags(data.content, ["strong", "p"]))}
      </div>
      <div className="flex items-center space-x-6">
        <Button title="Xem thêm" href={getPostDetailLink(data)} />
      </div>
    </div>
  );
};

export default HomeIntroduceConfession;
