import React from "react";

const Cards = () => {
  const cardArray = [
    {
      title: "Automated Savings",
      subtitle: "Build a dedicated savings faster on your terms",
      img: "/images/vite.svg",
    },
    {
      title: "Quick Savings",
      subtitle: "Build a dedicated savings faster on your terms",
      img: "/images/vite.svg",
    },
    {
      title: "Goal oriented Savings",
      subtitle: "Build a dedicated savings faster on your terms",
      img: "/images/vite.svg",
    },
  ];

  return (
    <div >
      <div className="w-[100%]  border flex items-center justify-around  " >
        {cardArray.map((items) => (
          <div className="border h-[300px] bg-blue-700 text-amber-50 font-bold rounded-[20px] py-6 px-3">
            <h1 className="text-[26px]">{items.title}</h1>
            <p>{items.subtitle}</p>
            <img className="py-32 pl-48"  src={items.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
