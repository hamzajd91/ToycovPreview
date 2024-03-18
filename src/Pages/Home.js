import React from "react";
import Header from "../Components/Home/Header/Header";
import HotSelling from "../Components/Home/HotSelling/HotSelling";
import Categories from "../Components/Home/Categories/Categories";
import FeaturedBrands from "../Components/Home/FeaturedBrands/FeaturedBrands";
const Home = () => {
  return (
    <div className="">
      <Header />
      <HotSelling />
      <Categories />
      <FeaturedBrands />
    </div>
  );
};

export default Home;
