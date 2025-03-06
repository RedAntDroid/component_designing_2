// write product card here
// cart/productcard.jsx
import React from "react";
import ViewProductButton from "../components/button";
import image from "../assets/image/shoes.png"

const Productcard = () => {
  // Static product details
  const productImage = "./public/shoes.png";
  const productName = "Stylish Sneakers";
  const productPrice = "$49.99";

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white">
      <img src={image} alt={productName} className="w-40 h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-3">{productName}</h2>
      <p className="text-gray-600 mt-1">{productPrice}</p>
      <div className="mt-3">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
