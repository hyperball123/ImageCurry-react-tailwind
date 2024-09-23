import React from "react";
import warehouseImage from "/assets/warehouse.jpg";

const productsLeft = [
  {
    src: "/assets/pexels-goumbik-518525.jpg",
    alt: "Fruits & Vegetables",
    text: "Fruits & vegetables",
  },
  {
    src: "/assets/pexels-janetrangdoan-936611.jpg",
    alt: "Poultry & Meat",
    text: "Poultry & Meat",
  },
  {
    src: "/assets/pexels-jaradahfish-3640451.jpg",
    alt: "Ice Creams",
    text: "Ice-creams",
  },
  {
    src: "/assets/pexels-monserratsoldu-3821250.jpg",
    alt: "Sea Food",
    text: "Sea Food",
  },
];

const productsRight = [
  {
    src: "/assets/pexels-pixabay-33239.jpg",
    alt: "Confectioneries",
    text: "Confectioneries including & baked products",
  },
  {
    src: "/assets/pexels-pixabay-208512.jpg",
    alt: "Ready-to-Cook",
    text: "Ready-to-cook food products",
  },
  {
    src: "/assets/pexels-roman-odintsov-5837092.jpg",
    alt: "Dairy Products",
    text: "Dairy products including butter & cheese",
  },
  {
    src: "/assets/pexels-teejay-1362534.jpg",
    alt: "Healthcare",
    text: "Healthcare & Pharmaceutical products",
  },
];

function ProductsSection() {
  return (
    <section className="bg-[#235daef9] m-4 rounded-2xl md:m-0 md:rounded-none relative md:px-0 lg:px-[6rem] font-light">
      <div className="md:mt-12 w-[100%] mx-auto px-4 md:px-2 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[0.8rem]">
          {/* Left Side Products */}
          <div className="space-y-6">
            {productsLeft.map((product, index) => {
              const wordCount = product.text.split(" ").length;
              return (
                // left side images
                <div className="flex items-end relative" key={index}>
                  <div className="bg-blue-100 rounded-full p-1 flex items-center mr-4 z-10">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-14 h-14 md:w-18 md:h-18 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <span
                    className={`text-white  border rounded-full min-w-[50%] md:min-w-[40%] w-[60%] md:max-w-[60%] whitespace-normal break-words absolute left-4  ${
                      wordCount > 4 ? "py-2" : "py-4 md:px-14"
                    }`}
                  >
                    {product.text}
                  </span>
                  <span className="w-8 decoration-dashed"></span>
                </div>
              );
            })}
          </div>

          {/* Center image/overlay div */}
          <div
            className="bg-cover bg-center bg-no-repeat hidden md:block absolute -top-12 left-[37.8%]"
            style={{
              backgroundImage: `url(${warehouseImage})`,
              height: "520px",
              width: "25%",
            }}
          >
            <div className="flex items-center justify-center h-full w-full">
              <p className="z-20 text-white font-semibold text-2xl text-center bg-blue-500 bg-opacity-70 w-[80%] h-[90%] px-14 xl:px-[5rem] flex items-center justify-center">
                THE PRODUCT SEGMENTS THAT WE CATER TO INCLUDE
              </p>
            </div>
          </div>

          {/* // right side images */}
          <div className="space-y-6">
            {productsRight.map((product, index) => {
              const wordCount = product.text.split(" ").length;
              return (
                <div
                  className="flex items-end relative justify-end"
                  key={index}
                >
                  <span
                    className={`text-white border rounded-full pr-[3rem] pl-5 md:pl-6 min-w-[50%] md:min-w-[40%] w-[60%] md:max-w-[60%] whitespace-normal break-words absolute right-4 ${
                      wordCount > 3 ? "py-2 lg:py-2 xl:py-4" : "py-4 md:px-8"
                    }`}
                  >
                    {product.text}
                  </span>
                  <div className="bg-blue-100 rounded-full p-1 flex items-center ml-4 z-10">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-14 h-14 md:w-18 md:h-18 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
