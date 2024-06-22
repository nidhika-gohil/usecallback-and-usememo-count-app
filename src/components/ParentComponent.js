import Title from "./Title"
import Count from "./Count"
import Button from "./Button"
import { useCallback, useState } from "react";

const ParentComponent = () => {
  const [age, setAge] = useState(26);
  const [salary, setSalary] = useState(60000);
  const incrementAge = useCallback(() => {
    setAge(age+1);
  },[age]) 
  const incrementSalary = useCallback(() => {
    setSalary(salary+ 10000);
  },[salary])
  console.log("Rendering Parent component");

  return (<div className="page-container">
    <div className="main-container">
      <Title/>
      <Count text="Age" count={age}/>
      <Button text="Increment Age" handleClick={incrementAge}/>
      <Count text="Salary" count={salary}/>
      <Button text="Increment Salary" handleClick={incrementSalary}/>
    </div>
  </div>);
};

export default ParentComponent;