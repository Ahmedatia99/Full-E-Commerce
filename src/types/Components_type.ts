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
}
export interface ProductCardComponentProps {
  componentProps?: ProductCardProps;
  products: productObject[];

  className?: string;
}
