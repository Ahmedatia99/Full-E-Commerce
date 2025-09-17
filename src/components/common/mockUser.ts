import type { User } from "@/types/user_Type";

export const mockUser: User = {
  id: 1,
  firstName: "Taha",
  lastName: "Ibrahim",
  email: "taha@gmail.com",
  address: "banha, 5236, bad place",
  password: "123456", // مجرد مثال مش production
  orders: [
    {
      orderId: 101,
      products: [
        {
          id: 1,
          isNew: true,
          title: "Havic HV G-92 Gamepad",
          price: 192,
          discountPrice: 150,
          ratingCount: 150,
          avgRate: 4.5,
          mainImgSRC: "/assets/pDetails1.png",
          colors: [
            {
              color: "#A0BCE0",
              quantity: 2,
              images: ["/assets/pDetails1.png", "/assets/pDetails2.png"],
              sizes: ["XS", "S"],
            },
          ],
          description: "PlayStation 5 Controller Skin High quality vinyl...",
          returnDelivery: 15,
        },
      ],
      status: "delivered",
      totalAmount: 150,
      createdAt: "2025-09-01T10:30:00Z",
    },
    {
      orderId: 102,
      products: [
        {
          id: 2,
          isNew: false,
          title: "Sony WH-1000XM4 Headphones",
          price: 349.99,
          discountPrice: 300,
          ratingCount: 420,
          avgRate: 4.8,
          mainImgSRC: "/assets/irelia.jpeg",
          colors: [
            {
              color: "#C0C0C0",
              quantity: 1,
              images: ["/assets/irelia.jpeg"],
              sizes: ["M", "L"],
            },
          ],
          description: "Industry-leading noise canceling headphones",
          returnDelivery: 0,
        },
      ],
      status: "pending",
      totalAmount: 300,
      createdAt: "2025-09-10T15:45:00Z",
    },
  ],
  wishlist: [1, 2, 3], // IDs of products in wishlist
};


