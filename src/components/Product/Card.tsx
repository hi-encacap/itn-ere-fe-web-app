import { ProductDataType } from "@interfaces/dataTypes";

interface ProductCardProps {
  product: ProductDataType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.title}</div>;
};

export default ProductCard;
