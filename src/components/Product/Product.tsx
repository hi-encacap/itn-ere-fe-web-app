import HomeProductListItem from "@components/Home/Product/ListItem";
import { ICategory } from "@encacap-group/common/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import ProductSidebar from "./ProductSidebar";

interface ProductProps {
  products: ProductDataType[];
  category: ICategory;
}

const Product = ({ products, category }: ProductProps) => (
  <>
    <ProductSidebar className="block md:hidden" isSidebarCollapsed category={category} />
    <div className="grid gap-4 md:col-span-2 md:grid-cols-3 md:gap-6 lg:col-span-3 lg:gap-10">
      {products.map((item) => (
        <HomeProductListItem data={item} key={item.id} />
      ))}
    </div>
    <ProductSidebar className="hidden flex-col md:flex" category={category} />
  </>
);

export default Product;
