import { IconChevronRight } from "@components/Common/Icon";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface PostCategorySidebarCollapsibleContainerProps {
  isCollapsed: boolean;
  title: string;
  children: ReactNode;
  isResponsive?: boolean;
  className?: string;
}

const PostCategorySidebarCollapsibleContainer = ({
  isCollapsed: defaultIsCollapsed,
  children,
  title,
  isResponsive = true,
  className,
}: PostCategorySidebarCollapsibleContainerProps) => {
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
          "-mx-4 rounded-none border-t-8 border-gray-200 text-xl font-bold ring-0 md:mx-0 md:rounded-lg md:border-t-0 md:text-base md:ring-2",
        className
      )}
    >
      <div
        className={twMerge(
          "flex cursor-pointer items-start justify-between py-4 md:py-5 md:font-semibold",
          isResponsive && " pb-6 pt-5 font-bold"
        )}
        onClick={handleToggleCollapse}
        role="button"
        tabIndex={0}
      >
        {title}
        <IconChevronRight className={twMerge("mt-1.5 w-4", !isCollapsed && "rotate-90")} />
      </div>
      {!isCollapsed && children}
    </div>
  );
};

export default PostCategorySidebarCollapsibleContainer;
