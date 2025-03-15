import { useState } from "react";
import ProductCard from "./components/productCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  //      ** State**     //
  const [isOpen, setIsOpen] = useState(false);

  //      ** Handler**     //
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false);
  }

  //      ** Render**     //
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const renderFromInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col mb">
      <label htmlFor="">{input.label}</label>
      <Input type="text" name={input.name} id={input.id} />
    </div>
  ));

  return (
    <main className="container mx-auto px-20">
      <Button  className="bg-violet-700" onClick={open} >ADD ITEM</Button>
      <div className="m-5 p-2 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="ADD NEW PRODUCT">
        {renderFromInputList}
        <div className="flex items-center space-x-2.5 mt-5">
          <Button className="bg-violet-700">Submit</Button>
          <Button className="bg-gray-700">Close</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
