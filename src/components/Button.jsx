import React from "react";

const Button = ({ children }) => {
  return (
    // <div className=" bg-slate-100 px-4 py-1 rounded-full shadow-md hover:shadow-xl">
    <div className=" border px-5 py-1 rounded-full shadow text-green-600 hover:shadow-slate-100 hover:bg-green-600 hover:text-white transition-all duration-300 ">
      {children}
    </div>
  );
};

export default Button;
