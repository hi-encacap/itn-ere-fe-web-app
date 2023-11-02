import PostLayout from "@components/Common/Layout/PostLayout";
import PostListItem from "@components/Post/PostListItem";
import { ICategory } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { ProductDataType } from "@interfaces/dataTypes";

interface ProductCategoryPageProps extends BasePageProps {
  rootCategory: ICategory;
  posts: ProductDataType[];
}

const ProductCategoryPage = ({ rootCategory, posts, ...props }: ProductCategoryPageProps) => {
  return (
    <PostLayout data={rootCategory} breadcrumbItems={[]} {...props}>
      <div className="md:col-span-2 lg:col-span-3">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
          {posts.map((item) => (
            <PostListItem data={item} key={item.id} />
          ))}
        </div>
      </div>
    </PostLayout>
  );
};

export default ProductCategoryPage;
