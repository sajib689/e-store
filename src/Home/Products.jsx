import { useQuery } from "@tanstack/react-query";
import ProductsCard from "../Components/ProductsCard";

const Products = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // Replace with your actual data fetching logic
      const response = await fetch("http://localhost:8000/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div className="bg-base-200 font-serif ">
      <div className="container mx-auto pt-12 pb-24">
        <h1 className="text-5xl text-center font-bold">Featured Products</h1>
        <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-6 mt-24">
          {data.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
