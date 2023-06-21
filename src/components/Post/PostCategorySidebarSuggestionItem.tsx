import { IPost, getImageURL } from "@encacap-group/common/dist/re";
import { getPostDetailLink } from "@utils/helper";
import Image from "next/image";
import Link from "next/link";

interface PostCategorySidebarSuggestionItemProps {
  data: IPost;
}

const PostCategorySidebarSuggestionItem = ({ data }: PostCategorySidebarSuggestionItemProps) => {
  return (
    <Link href={getPostDetailLink(data)} className="group flex items-center justify-start space-x-4">
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={getImageURL(data.avatar)}
          alt={data.title}
          fill
          sizes="100%"
          className="object-cover object-center"
        />
      </div>
      <h3 className="line-clamp-3 text-sm font-semibold text-gray-700 duration-100 group-hover:text-encacap-main">
        {data.title}
      </h3>
    </Link>
  );
};

export default PostCategorySidebarSuggestionItem;
