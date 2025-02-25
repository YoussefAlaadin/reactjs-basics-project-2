import ProductCard from "./components/productCard";
import { productList } from "./data";

function App() {
  // ** Renders
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  return (
    <div className="container mx-auto px-20" >
      <div className="m-5 p-2 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >{renderProductList}</div>
    </div>
  );
}

export default App;
