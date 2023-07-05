import { IconChevronRight } from "@components/Common/Icon";
import { ICategory, IMAGE_VARIANT_ENUM, getImageURL } from "@encacap-group/common/dist/re";
import { getCategoryPageLink } from "@utils/helper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

interface PostCategorySidebarTreeProps {
  category: ICategory;
  level: number;
  className?: string;
}

const PostCategorySidebarTreeItem = ({ category, className, level }: PostCategorySidebarTreeProps) => {
  const [isShowChildren, setIsShowChildren] = useState(false);

  const children = category.children ?? [];

  const handleClick = useCallback(() => {
    setIsShowChildren((prev) => !prev);
  }, []);

  return (
    <div className={className}>
      <div className="flex items-center space-x-4" title={category.name}>
        <Link href={getCategoryPageLink(category)}>
          <div className="flex items-center space-x-4 duration-100 hover:text-encacap-main">
            <Image
              src={getImageURL(category.avatar, IMAGE_VARIANT_ENUM.SMALL)}
              alt={category.name}
              width={24}
              height={24}
              className="h-6 w-6 rounded object-cover object-center"
            />
            <div className="line-clamp-1">{category.name}</div>
          </div>
        </Link>
        <button
          type="button"
          className={twMerge(
            "relative -right-1.5 flex h-6 w-6 flex-shrink-0 transform items-center justify-center rounded-full duration-100 hover:bg-gray-100",
            isShowChildren && "rotate-90 bg-gray-100",
            children.length === 0 && "pointer-events-none opacity-0"
          )}
          onClick={handleClick}
        >
          <IconChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
      {children.length > 0 && (
        <motion.div
          className={twMerge("overflow-hidden", isShowChildren && "overflow-visible")}
          initial="collapsed"
          animate={isShowChildren ? "open" : "collapsed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.1 }}
        >
          <div className={twMerge("flex flex-col space-y-4 border-l-2 border-gray-100 pl-3")}>
            {children.map((item, index) => (
              <PostCategorySidebarTreeItem
                category={item}
                key={item.id}
                level={level + 1}
                className={twMerge(index === 0 && "mt-4")}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PostCategorySidebarTreeItem;
