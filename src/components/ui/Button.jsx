function Button({ className, children, width="w-full" }) {
  return (
    <button className={`${className} ${width} text-white  rounded-md p-2 font-semibold`}>
      {children}
    </button>
  );
}

export default Button;
