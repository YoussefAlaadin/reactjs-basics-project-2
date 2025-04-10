import { txtSlicer } from "../utils/functionality";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

const ProductCard = ({ product }) => {
  const { title, description, imageURL, price, name, colors } = product;

  //      ** Render**     //

  const renderColors = colors.map((color) => {
    return <CircleColor key={color} color={color} />;
  });
  
  return (
    <div className="mx-auto p-3 border border-gray-300 rounded-md flex flex-col max-w-sm md:max-w-lg">
      <Image
        className={"rounded-md mb-4 w-full h-48 object-cover"}
        src={imageURL}
        alt={name}
      />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 21)}</h3>
      <p className="text-gray-500 break-words">{txtSlicer(description, 100)}</p>
      <div className="flex my-3 space-x-3 items-center">{renderColors}</div>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold text-indigo-600">${price}</span>
        <Image className={"w-10 h-10 rounded-full"} src={imageURL} alt={name} />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-8 ">
        <Button className="bg-violet-700 ">Edit</Button>
        <Button className="bg-red-600 ">Destroy</Button>
      </div>
    </div>
  );
};
export default ProductCard;
