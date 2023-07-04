import { ReactNode, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconChevronRight } from "./Icon";

interface PostSidebarCollapsibleBlockProps {
  isCollapsed: boolean;
  title: string;
  children: ReactNode;
  isResponsive?: boolean;
}

const PostSidebarCollapsibleBlock = ({
  isCollapsed: defaultIsCollapsed,
  children,
  title,
  isResponsive = true,
}: PostSidebarCollapsibleBlockProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsCollapsed(defaultIsCollapsed);
  }, [defaultIsCollapsed]);

  return (
    <div
      className={twMerge(
        "rounded-lg px-4 text-base ring-2 ring-gray-200 md:px-5",
        isResponsive &&
          "-mx-4 rounded-none border-t-8 border-gray-200 text-xl font-bold ring-0 md:mx-0 md:rounded-lg md:border-t-0 md:text-base md:ring-2"
      )}
    >
      <div
        // "flex cursor-pointer items-center justify-between py-4 md:py-5 md:font-semibold"
        className={twMerge(
          "flex cursor-pointer items-center justify-between py-4 md:py-5 md:font-semibold",
          isResponsive && " pb-6 pt-5 font-bold"
        )}
        onClick={handleToggleCollapse}
        role="button"
        tabIndex={0}
      >
        {title}
        <IconChevronRight className={twMerge("w-4", !isCollapsed && "rotate-90")} />
      </div>
      {!isCollapsed && children}
    </div>
  );
};

export default PostSidebarCollapsibleBlock;
