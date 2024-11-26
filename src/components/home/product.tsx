import data from '@/json/product.json';

const Product = () => {
  const products = data.products;
  console.log(`📌 ~ product:`, products);

  return (
    <>
      <div>
        {products.map((product) => (
          <p>{product.title}</p>
        ))}
      </div>
    </>
  );
};

export default Product;
