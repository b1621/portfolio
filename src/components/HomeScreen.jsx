import React from "react";
import Button from "./Button";

const HomeScreen = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-row gap-5 my-28 w-2/3 mx-auto">
        <div className=" my-10">
          <h2 className=" text-green-700 text-4xl">Hello,</h2>
          <h3 className="my-5 text-6xl">I'm Devid B.</h3>
          <h4 className=" text-3xl">Software Developer & Pentration Tester</h4>
          <div className="my-5 w-fit">
            <Button> About Me </Button>
          </div>
        </div>
        <div className="border">
          <img src=" ./man_smoke.jpg" className=" w-72" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
