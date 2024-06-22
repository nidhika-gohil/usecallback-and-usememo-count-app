import React from "react";
const Count = ({text, count}) => {
  console.log(`Rendering ${text} count component`);
  return (
    <>
      <span>{text} : </span>  
      <span>{count}</span>
    </>
  );
};

export default React.memo(Count);