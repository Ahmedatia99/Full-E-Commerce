// mockProducts.ts
import type { productObject } from "@/types/product_Type";
export const mockProducts: productObject[] = [
  {
    id: 1,
    isNew: false,
    title: "Gucci duffle bag",
    price: 10,
    discountPrice: 5,
    ratingCount: 50,
    avgRate: 5,
    description:
      "شنطة جوتشي أصلية جلد طبيعي، تصميم أنيق وعصري، مناسبة لجميع المناسبات.",
    returnDelivery: 14,
    DeliveryPostalCode: [12345, 67890, 11223, 44556, 78901],
    colors: [
      {
        color: "red",
        quantity: 0,
        images: [],
        sizes: ["S", "M", "L"],
      },
      {
        color: "black",
        quantity: 10,
        images: [
          "https://res.cloudinary.com/dtf9brzuu/image/upload/v1695806788/small_7_1db6b8518a.jpg",
          "https://res.cloudinary.com/dtf9brzuu/image/upload/v1695806343/10_98a0eb5a37.jpg",
        ],
        sizes: ["M", "L"],
      },
    ],
    mainImgSRC:
      "https://res.cloudinary.com/dtf9brzuu/image/upload/v1695806708/medium_final_269ea641ad.jpg",
  },
  {
    id: 2,
    isNew: true,
    title: "Nike Air Max",
    price: 20,
    discountPrice: 5,
    ratingCount: 100,
    avgRate: 2,
    description: "حذاء رياضي مريح من نايك، مناسب للجري والاستخدام اليومي.",
    returnDelivery: 7,
    DeliveryPostalCode: [12345, 67890, 11223, 44556, 78901],

    colors: [
      {
        color: "silver",
        quantity: 15,
        images: [
          "https://res.cloudinary.com/dtf9brzuu/image/upload/v1758009080/image_63_1_yty6fn.png",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        color: "red",
        quantity: 5,
        images: [
          "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
    mainImgSRC:
      "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
  },
  {
    id: 3,
    isNew: false,
    title: "Apple Watch",
    price: 99,
    discountPrice: 10,
    ratingCount: 200,
    avgRate: 4.8,
    description: "ساعة أبل الذكية، تدعم تتبع اللياقة والصحة، شاشة Retina.",
    returnDelivery: 30,
    DeliveryPostalCode: [12345, 67890, 11223, 44556, 78901],

    colors: [
      {
        color: "silver",
        quantity: 8,
        images: [
          "https://res.cloudinary.com/demo/image/upload/v1610000000/apple-watch-silver.png",
        ],
        sizes: ["XL", "L"],
      },
      {
        color: "gold",
        quantity: 3,
        images: [
          "https://res.cloudinary.com/demo/image/upload/v1610000000/apple-watch-gold.png",
        ],
        sizes: ["L"],
      },
    ],
    mainImgSRC:
      "https://res.cloudinary.com/dtf9brzuu/image/upload/v1758009080/image_63_1_yty6fn.png",
  },
  {
    id: 4,
    isNew: false,
    title: "Apple Watch",
    price: 99,
    discountPrice: 10,
    ratingCount: 200,
    avgRate: 4.8,
    description: "ساعة أبل الذكية، تدعم تتبع اللياقة والصحة، شاشة Retina.",
    returnDelivery: 30,
    DeliveryPostalCode: [12345, 67890, 11223, 44556, 78901],

    colors: [
      {
        color: "silver",
        quantity: 8,
        images: [
          "https://res.cloudinary.com/demo/image/upload/v1610000000/apple-watch-silver.png",
        ],
        sizes: ["XL", "L"],
      },
      {
        color: "gold",
        quantity: 3,
        images: [
          "https://res.cloudinary.com/demo/image/upload/v1610000000/apple-watch-gold.png",
        ],
        sizes: ["L"],
      },
    ],
    mainImgSRC:
      "https://res.cloudinary.com/dtf9brzuu/image/upload/v1758009080/image_63_1_yty6fn.png",
  },
];
