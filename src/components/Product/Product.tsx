import HomeProductListItem from "@components/Home/Product/ListItem";
import { ICategory, IPost } from "@encacap-group/common/dist/re";
import ProductSidebar from "./ProductSidebar";

interface ProductProps {
  products: IPost[];
  categories: ICategory[];
}

const Product = ({ products, categories }: ProductProps) => (
  <>
    <ProductSidebar className="block md:hidden" isSidebarCollapsed categories={categories} />
    <div className="grid gap-4 md:col-span-2 md:grid-cols-3 md:gap-6 lg:col-span-3 lg:gap-10">
      {products.map((item) => (
        <HomeProductListItem data={item} key={item.id} />
      ))}
    </div>
    <ProductSidebar className="hidden flex-col md:flex" categories={categories} />
  </>
);

export default Product;
