import React from "react";

const products = [
  {
    src: "assets/fruits.jpg",
    alt: "Fruits & Vegetables",
    text: "Fruits & vegetables",
  },
  {
    src: "assets/eggs.jpg",
    alt: "Poultry & Meat",
    text: "Poultry & Meat",
  },
  {
    src: "assets/icecream.jpg",
    alt: "Ice Creams",
    text: "Ice-creams",
  },
  {
    src: "assets/fish.jpg",
    alt: "Sea Food",
    text: "Sea Food",
  },
  {
    src: "assets/chochlate.jpg",
    alt: "Confectioneries",
    text: "Confectioneries including & baked products",
  },
  {
    src: "assets/cookedFood.jpg",
    alt: "Ready-to-Cook",
    text: "Ready-to-cook food products",
  },
  {
    src: "assets/butter.jpg",
    alt: "Dairy Products",
    text: "Dairy products including butter & cheese",
  },
  {
    src: "assets/medicine.jpg",
    alt: "Healthcare",
    text: "Healthcare & Pharmaceutical products",
  },
];

function ProductsSectionMobile() {
  return (
    <div className="bg-[#235daef9] w-full px-4 py-8">
      <div className="grid grid-cols-1 gap-6">
        {products.map((product, index) => {
          return (
            <div className="flex items-end text-[0.7rem] relative" key={index}>
              <div className="bg-blue-100 rounded-full p-1 flex items-center mr-4 z-10">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
              </div>
              <span className="text-white border rounded-full pl-[3.2rem] pr-5 min-w-[50%] w-[90%] whitespace-normal break-words absolute left-4 py-4">
                {product.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsSectionMobile;
