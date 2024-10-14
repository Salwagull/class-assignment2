import React from 'react'
import cssStyle from "./footer.module.css"

console.log(cssStyle,"CSS-Style");

const Footer = () => {
  return(
    <div>
      <h1 className={cssStyle.h1}>Footer</h1>
    </div>
  )
};

export default Footer;