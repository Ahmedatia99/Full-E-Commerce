import Product_Card from "@/components/common/Product_Card/Product_Card";
import HeroProductDetails from "@/components/common/ProductDetails/HeroProductDetails";
import SectionHeader from "@/components/common/SectionHeader";
import { mockProducts } from "../components/common/ProductDetails/mockProduct";

function ProductsDetails() {
  const dataDetails = mockProducts;
  return (
    <div className="container px-3  mx-auto flex flex-col gap-10 ">
      <HeroProductDetails />
      <SectionHeader className="" label="Today's"></SectionHeader>
      <Product_Card
        className=" border-4 w-full"
        products={dataDetails}
        index={0}
      />
    </div>
  );
}

export default ProductsDetails;
