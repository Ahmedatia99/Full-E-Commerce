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
  category?: string;
  subCategory?: string;
  returnDelivery?: number;
  DeliveryPostalCode?: number[];
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
