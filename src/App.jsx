import React from "react";
import ProductsSection from "./components/ProductsSection";
import Tabs from "./components/Tabs";
import Header from "./ui/Header";
import ProductsSectionMobile from "./components/ProductsSectionMobile";

function App() {
  return (
    <main className="bg-white">
      {/* Header only visible on mobile */}
      <div className="block md:hidden">
        <Header />
      </div>

      {/* Product sections based on screen size */}
      <div>
        {/* Show ProductsSectionMobile only before md */}
        <div className="block md:hidden">
          <ProductsSectionMobile />
        </div>

        {/* Show ProductsSection only after md */}
        <div className="hidden md:block">
          <ProductsSection />
        </div>
      </div>

      {/* Tabs section */}
      <section className="md:p-8 md:px-[6rem] lg:px-[12rem] p-2 px-4 mb-24">
        <Tabs />
      </section>
    </main>
  );
}

export default App;
