import React from "react";

const Props = (props) => {
  return (
    <div className="w-40 flex-2/5 justify-center py-2 px-2 border-2 bg-amber-950 text-amber-50 ">
      <h2>name:{props.name}</h2>
      <h2>age: {props.age}</h2>
      <h2>food:{props.food}</h2>
      <h2>occupation:{props.occupation}</h2>
    </div>
  );
};

export default Props;
