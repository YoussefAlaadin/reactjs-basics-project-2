import { useState } from "react";
import ProductCard from "./components/productCard";
import Modal from "./components/ui/Modal";
import { colors, formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import productValidation from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import ColorName from "./components/ColorName";
import { v4 as uuid } from "uuid";

function App() {
  //      ** State**     //
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [""],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const defaultErrorObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    tempColor: "",
  };

  const [products, setProducts] = useState(productList);
  const [product, setProduct] = useState(defaultProductObj);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState(defaultErrorObj);
  const [tempColor, setTempColor] = useState([]);
  const [isError, setIsError] = useState(false);

  //      ** Handler**     //

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChangeEventHandler = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    if (isError) {
      setErrors({
        ...errors,
        [name]: productValidation({ ...product, [name]: value}, tempColor)[name], //updates the error message while typing
        
      })

        ;

    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const errors = productValidation(product, tempColor);
    //** Check if one of the errors has "" && if all the errors have ""**/
    const hasNoError =
      Object.values(errors).some((error) => error === "") &&
      Object.values(errors).every((error) => error === "");
      
    if (hasNoError) {
      setProducts((prev) => [
        { ...product, id: uuid(), colors: tempColor },
        ...prev,
      ]);
      console.log("Products: ", [products]);
      console.log("Product submitted");
      setProduct(defaultProductObj);
      setTempColor([]);
      setErrors(defaultErrorObj);
      closeModal();
    }
    else {
      setErrors(errors);
      setIsError(true);
      console.log(errors.tempColor);
    }
  };

  const onCancelHandler = () => {
    setProduct(defaultProductObj);
    setTempColor([]);
    setErrors(defaultErrorObj);
    setIsError(false);
    closeModal();
  };

  //      ** Render**     //

  const renderProductList = products.map((product) => (
    <ProductCard product={product} colors={product.colors} key={product.id} />
  ));

  const renderFromInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col mb">
      <label htmlFor="">{input.label}</label>
      <Input
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeEventHandler}
      />
      {/** Controlled Component*/}
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));
  const renderCircleColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color)); //remove color from array
          return;
        }

        setTempColor((prev) => [...prev, color]); //Best Practice to use previous state
      }}
    />
  ));
  const renderNameColors = tempColor.map((color) => (
    <ColorName key={color} color={color} />
  ));
  //      ** Render**     //

  return (
    <main className="container mx-auto px-20">
      <Button className="bg-violet-700" onClick={openModal}>
        ADD ITEM
      </Button>
      <div className="m-5 p-2 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>

      <Modal
        isOpen={isOpen}
        close={closeModal}
        onSubmit={submitHandler}
        title="ADD NEW PRODUCT"
      >
        {renderFromInputList}
        <div className="flex flex-wrap items-center space-x-2.5 mt-3">
          {renderCircleColors}
          <ErrorMsg msg={errors.tempColor} />
        </div>
        <div className="flex flex-wrap items-center mt-3">
          {renderNameColors}
        </div>
        <div className="flex items-center space-x-2.5 mt-5">
          <Button onClick={submitHandler} className="bg-violet-700">
            Submit
          </Button>
          <Button onClick={onCancelHandler} className="bg-gray-700">
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
