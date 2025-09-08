const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="photoContainer p-10 h-[90%]">
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

export default ProductImage;
