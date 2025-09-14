import type { productObject } from "./product_Type";

export interface ProductCardProps {
  AddToCartBtnFixed?: boolean;
  hasFavouriteIcon?: boolean;
  hasviewIcon?: boolean;
  hasDeleteIcon?: boolean;
  hasReview?: boolean;
  hasColors?: boolean;
  ratingAndPriceInRow?: boolean;
}

export interface SingleProductCardComponentProps {
  componentProps?: ProductCardProps;
  product: productObject;
  index: number;
}
export interface ProductCardComponentProps {
  componentProps?: ProductCardProps;
  products: productObject[];
  index: number;
}
