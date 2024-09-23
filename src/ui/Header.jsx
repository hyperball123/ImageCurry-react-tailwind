import React from "react";

function Header() {
  return (
    <header
      className=" text-center py-4 border-b text-white text-xl font-semibold"
      style={{
        backgroundImage: `url('/assets/warehouse.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="bg-blue-500 bg-opacity-70 mx-20 h-auto text-center p-7 rounded ">
        The product segments that we cater to include
      </h1>
    </header>
  );
}

export default Header;
