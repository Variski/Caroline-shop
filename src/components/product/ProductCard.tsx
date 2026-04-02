type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="mb-4" />
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-gray-500">Rp {product.price}</p>
    </div>
  );
}