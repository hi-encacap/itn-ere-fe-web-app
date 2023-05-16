import { ReactNode, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconChevronRight } from "./Icon";

interface PostSidebarCollapsibleBlockProps {
  isCollapsed: boolean;
  title: string;
  children: ReactNode;
}

const PostSidebarCollapsibleBlock = ({
  isCollapsed: defaultIsCollapsed,
  children,
  title,
}: PostSidebarCollapsibleBlockProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsCollapsed(defaultIsCollapsed);
  }, [defaultIsCollapsed]);

  return (
    <div className="rounded-lg px-4 ring-2 ring-gray-200 md:px-5">
      <div
        className="flex cursor-pointer items-center justify-between py-4 md:py-5 md:font-semibold"
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
