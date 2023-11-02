import { ICategory } from "@encacap-group/common/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import parse from "html-react-parser";
import ProductContentSlider from "./ContentSlider";

interface ProductContentProps {
  data: ProductDataType;
  rootCategory: ICategory;
}

const ProductContent = ({ data, rootCategory }: ProductContentProps) => {
  return (
    <>
      <ProductContentSlider data={data.images} />
      <div className="pb-6 pt-4 md:pb-8 md:pt-6">
        <div className="text-encacap-main">{rootCategory.name}</div>
        <div className="mt-2 text-xl font-semibold md:text-3xl">{data.title}</div>
      </div>
      <div className="border-t-2 border-gray-100 py-5">
        <div className="text-xl font-bold">Mô tả</div>
        <div className="post-content mt-3 text-base text-gray-500">{parse(data.bodyHtml)}</div>
      </div>
    </>
  );
};

export default ProductContent;
