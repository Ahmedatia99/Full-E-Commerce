function OurFeatures() {
  const features = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      img: "/assets/headPhone.webp",
      alt: "Icon representing fast delivery with a headset",
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      img: "/assets/gurantee.webp",
      alt: "Icon representing customer service support",
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      img: "/assets/delivery.webp",
      alt: "Icon representing money-back guarantee",
    },
  ];
  return (
    <section
      className="mb-20 max-w-full self-center"
      aria-labelledby="our-features-heading"
    >
      <h2 id="our-features-heading" className="sr-only">
        Our Store Features
      </h2>

      <ul className="flex justify-center items-start gap-20 max-sm:flex-col">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="flex flex-col w-full md:px-5 items-center justify-center text-center"
          >
            <img
              src={feature.img}
              alt={feature.alt}
              loading="lazy"
              width={81}
              height={80}
              className="mb-4"
            />
            <h3 className="font-semibold text-[20px] mb-2">{feature.title}</h3>
            <p className="text-[14px]">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OurFeatures;
