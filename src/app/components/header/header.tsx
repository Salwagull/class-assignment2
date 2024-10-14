import React from 'react'
import cssStyle from "./header.module.css"

console.log(cssStyle,"CSS-Style");
// const multiplyby = (attr: number)=>{
//   console.log(attr * 2)
// }


// const Header = (props:any) => {
//   console.log(props)
{/* <h2 className={cssStyle.h2}>{props.home}</h2> */}

const Header =() => {
  return (
    <div>
    
    <h1 className={cssStyle.h1}>Header</h1>
    </div>

  )
}

export default Header;