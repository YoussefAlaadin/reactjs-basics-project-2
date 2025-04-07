
function CircleColor({ color, ...rest }) {
  return (
    <span className= {`w-5 h-5 rounded-full cursor-pointer`} style={{background: color}} {...rest} ></span>

  )
}

export default CircleColor;