import { ReactNode } from "react";

interface PostDetailSuggestionsContainerProps {
  title: string;
  children: ReactNode;
}

const PostDetailSuggestionsContainer = ({ children, title }: PostDetailSuggestionsContainerProps) => {
  return (
    <div className="mt-2 border-t-2 border-gray-100 py-5 md:mt-3">
      <div className="mb-7 text-xl font-bold">{title}</div>
      {children}
    </div>
  );
};

export default PostDetailSuggestionsContainer;
