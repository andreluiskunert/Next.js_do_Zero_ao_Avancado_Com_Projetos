import React from "react";

const Postages01 = ({ params }) => {

  const id = params.id;

  return (
    <div>
      <h1>Titulo: {id}</h1>
      <p>Texto do posts....</p>
    </div>
  );
};

export default Postages01;