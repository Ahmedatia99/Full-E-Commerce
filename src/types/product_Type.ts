export interface products {
  productObject: productObject[];
}

export interface productObject {
  id: number;
  isNew: boolean;
  title: string;
  price: number;
  discountPrice?: number;
  ratingCount: number;
  avgRate: number;
  colors: colorsVariants[];
  mainImgSRC: string;
  description: string;
  returnDelivery?: number;
}

export interface colorsVariants {
  color: string;
  quantity: number;
  images: string[];
  sizes: string[];
}

export type cartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  color: string;
  key: string;
};
