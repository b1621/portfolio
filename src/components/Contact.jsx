import React from "react";
import Button from "./Button";
import ContactForm from "./ContactForm";

const Contact = ({ id }) => {
  return (
    <div id={id} className="h-screen w-2/3 mx-auto pb-10 ">
      <h2 className=" text-center text-4xl pt-14 pb-20">Contact</h2>
      <div className=" flex justify-between">
        <ContactForm />
        <div className=" flex flex-col my-10 space-y-10">
          <div>
            <h3 className=" text-green-700 text-2xl">Phone</h3>
            <p>+251 235 324 895</p>
          </div>
          <div>
            <h3 className=" text-green-700 text-2xl">Email</h3>
            <h2>sedf.dev@gmail.com</h2>
          </div>
          <div>
            <h3 className=" text-green-700 text-2xl">Address</h3>
            <h2>Addis Ababa, Ethiopia</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
