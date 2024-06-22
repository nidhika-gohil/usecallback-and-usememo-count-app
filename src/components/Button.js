import React from "react";
const Button = ({text, handleClick}) => {
  console.log(`Rendering ${text} button component`);
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default React.memo(Button);