import React, { Children } from 'react'

const Dashoardlayout = ({ Children }) => {
  return (
    <div>
     <nav>Links das dashboard</nav>
     <div>{Children} </div>
    </div>
  )
}

export default Dashoardlayout
