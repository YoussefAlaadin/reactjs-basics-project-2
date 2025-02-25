import { txtSlicer } from "../utils/functionality";
import Image from "./Image";
import Button from "./ui/Button";
import ColSpan from "./ui/ColSpan";

const ProductCard = ({ product }) => {  
  const { title, description, imageURL, price, name } =
    product;
  return (
    <div className="mx-auto p-3 border border-gray-300 rounded-md flex flex-col max-w-sm md:max-w-lg">
      <Image className={"rounded-md mb-4"} src={imageURL} alt={name} />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex my-3 space-x-3 items-center">
        <ColSpan className=" bg-red-700 " />
        <ColSpan className=" bg-green-500 " />
        <ColSpan className=" bg-blue-700 " />
      </div>

      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image className={"w-10 h-10 rounded-full"} src={imageURL} alt={name} />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-8 ">
        <Button className="bg-indigo-600 ">EDIT</Button>
        <Button className="bg-red-500 ">DELETE</Button>
      </div>
    </div>
  );
};
export default ProductCard;
