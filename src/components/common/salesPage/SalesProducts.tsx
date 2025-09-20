import SectionHeader from "../SectionHeader/SectionHeader";
function SalesProducts() {


  return (
    <section className="px-2 container mx-auto pt-10">
      <SectionHeader
        label="Today's"
        title="Flash Sales"
        className="mb-10"
      />
      {/* {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <Product_Card
          products={products}
          componentProps={{ hasReview: true }}
          className="grid grid-cols-5"
        />
      ) : (
        <p>No products found.</p>
      )} */}
    </section>
  );
}

export default SalesProducts;
