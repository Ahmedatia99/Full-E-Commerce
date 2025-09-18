export interface products {
  productObject: productObject[];
}

export interface productObject {
  id: number;
  isNew: boolean;
  title: string; //Must Be short to avoid Height issue
  price: number;
  discountPrice: number;
  ratingCount: number;
  avgRate: number;
  colors: colorsVariants[];
  mainImgSRC: string;
  description?: string;
  returnDelivery?: number;
  DeliveryPostalCode?: number[];
}

export interface colorsVariants {
  color: string;
  quantity: number;
  images: string[];
  sizes: string[];
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
