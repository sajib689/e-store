import { useQuery } from "@tanstack/react-query";

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
console.log(data)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product, index) => (
          <li key={index}>
            {product.productName} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
