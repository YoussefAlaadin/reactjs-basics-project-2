import { useState } from "react";
import ProductCard from "./components/productCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

function App() {
  //      ** State**     //
  const [isOpen, setIsOpen] = useState(true);

  //      ** Handler**     //
  // function open() {
  //   setIsOpen(true)
  // }

  function close() {
    setIsOpen(false);
  }

  //      ** Render**     //
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <div className="container mx-auto px-20">
      <div className="m-5 p-2 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="ADD NEW PRODUCT">
        <div className="flex items-center space-x-2.5">
        <Button className="bg-violet-700">
          Submit
        </Button>
        <Button className="bg-gray-700">
          Close
        </Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
