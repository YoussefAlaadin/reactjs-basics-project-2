function Button({ className, children, width="w-full", ...rest }) {
  return (
    <button className={`${className} ${width} text-white  rounded-md p-2 font-semibold`} {...rest} >
      {children}
    </button>
  );
}

export default Button;
