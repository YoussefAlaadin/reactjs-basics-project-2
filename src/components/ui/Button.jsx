/* eslint-disable react/prop-types */ 
function Button({ className, children, width="w-full" }) {
  return (
    <button className={`${className} ${width} text-white  rounded-md p-2`}>
      {children}
    </button>
  );
}

export default Button;
