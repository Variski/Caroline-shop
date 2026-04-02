import ProductCard from "../product/ProductCard";

const dummyProducts = [
  {
    id: "1",
    name: "Nike Air Force 1",
    price: 1500000,
    image: "/images/shoe1.jpg",
  },
];

export default function NewProducts() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">New Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}