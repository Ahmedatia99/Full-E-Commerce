

export interface productObject {
  id: number;
  isNew?: boolean;
  isFlash?: boolean;
  isFeatured?: boolean;
  ishook?: boolean;
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
  brand?: string;
}

export interface hookProductObject {
  id: number;
  title: string;
  description: string;
  mainImgSRC: string;
}
export interface colorsVariants {
  color: string;
  quantity: number;
  images: string[];
  sizes?: string[];
}

export type Filters = {
  category: string;
  brand: string[];
  priceRange: [number, number];
  search: string;
  sort: string;
  discountOnly: boolean;
  rating: string;
};
