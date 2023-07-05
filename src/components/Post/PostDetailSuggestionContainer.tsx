import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PostDetailSuggestionsContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const PostDetailSuggestionsContainer = ({
  children,
  title,
  className,
}: PostDetailSuggestionsContainerProps) => {
  return (
    <div className={twMerge(className, "mt-2 border-t-2 border-gray-100 py-5 last:pb-0 md:mt-3")}>
      <div className="mb-7 text-xl font-bold">{title}</div>
      {children}
    </div>
  );
};

export default PostDetailSuggestionsContainer;
