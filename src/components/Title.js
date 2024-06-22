import React from "react";
const Title = () => {
  console.log("Rendering Title component");
  return (
    <>
      <h1>Count age and salary</h1>
    </>
  )
};

export default React.memo(Title);