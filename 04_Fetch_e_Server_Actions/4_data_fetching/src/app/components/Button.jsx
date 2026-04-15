"use client";

import { Children } from "react";

const Button = ({Children}) =>{
  return <button>
    {Children}
  </button>
}
export default Button;