export interface products {
  productObject: productObject[];
}

export interface productObject {
  id: number;
  isNew?: boolean;
  isFlash?: boolean;
  isFeatured?: boolean;
  title: string;
  price: number;
  discountPrice?: number;
  ratingCount: number;
  avgRate: number;
  colors: colorsVariants[];
  mainImgSRC: string;
  description: string;
  returnDelivery?: number;
  DeliveryPostalCode?: number[];
  category: string;
  subCategory: string;
}

export interface colorsVariants {
  color: string;
  quantity: number;
  images: string[];
  sizes?: string[];
}

export type cartProduct = {
  id: number;
  mainImage: string;

  title: string;
  price: number;
  quantity: number;
  color: string | undefined;
  key: string;
};
