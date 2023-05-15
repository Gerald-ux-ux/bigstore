import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "./Loading";

function Product() {
  const router = useRouter();
  const { productId } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (!product) {
    return (
      <div>
        <h1>Product not found.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      {product.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category.name}</p>
          <p>
            Price: {product.pricing.priceRange.start.gross.amount}{" "}
            {product.pricing.priceRange.start.gross.currency}
          </p>
          <img src={product.thumbnail.url} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default Product;
