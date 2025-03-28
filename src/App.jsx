import { useState } from "react";
import ProductCard from "./components/productCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  //      ** State**     //
  const [product, setProduct] = useState({
    title: '',
    description: '',
    imageURL: '',
    price:''
  })
  const [isOpen, setIsOpen] = useState(false);
  //      ** Handler**     //
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false);
  }

  const onChangeEventHandler = (event) => {
    
    const { name, value } = event.target
    
    setProduct({
      ...product,   [name]: value,
    })
    console.log([product]);
  }

  //      ** Render**     //
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const renderFromInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col mb">
      <label htmlFor="">{input.label}</label>
      <Input name={input.name} id={input.id} value={product[input.name]} onChange={onChangeEventHandler}/>  {/** Controlled Component*/}
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
          <Button onClick={close} className="bg-violet-700">Submit</Button>
          <Button onClick={close} className="bg-gray-700">Close</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
