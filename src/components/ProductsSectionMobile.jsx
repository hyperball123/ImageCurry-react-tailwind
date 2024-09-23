import React from "react";

const products = [
  {
    src: "/assets/pexels-janetrangdoan-936611.jpg",
    alt: "fruits-and-vegetables",
    text: "Fruits & Vegetables",
  },
  {
    src: "/assets/pexels-goumbik-518525.jpg",
    alt: "eggs",
    text: "Poultry & Meat",
  },
  {
    src: "/assets/pexels-teejay-1362534.jpg",
    alt: "ice-cream",
    text: "Ice Creams",
  },
  {
    src: "/assets/pexels-jaradahfish-3640451.jpg",
    alt: "fish",
    text: "Sea Food",
  },
  {
    src: "/assets/pexels-pixabay-33239.jpg",
    alt: "chocolate",
    text: "Confectioneries including chocolates & baked products",
  },
  {
    src: "/assets/pexels-roman-odintsov-5837092.jpg",
    alt: "cooked-food",
    text: "Ready-to-cook food products",
  },
  {
    src: "/assets/pexels-monserratsoldu-3821250.jpg",
    alt: "butter",
    text: "Dairy products including butter & cheese",
  },
  {
    src: "/assets/pexels-pixabay-208512.jpg",
    alt: "medicine",
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
