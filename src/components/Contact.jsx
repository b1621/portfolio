import React from "react";
import Button from "./Button";
import ContactForm from "./ContactForm";

const Contact = ({ id }) => {
  return (
    <div id={id} className="h-screen w-2/3 mx-auto pb-10">
      <h2 className=" text-center text-4xl  py-14">Contact</h2>
      <div className="flex justify-around">
        <div>
          <h3>Phone</h3>
          <p>+251 235 324 895</p>
        </div>
        <div>
          <h3>Email</h3>
          <h2>sedf.dev@gmail.com</h2>
        </div>
        <div>
          <h3>Address</h3>
          <h2>Addis Ababa, Ethiopia</h2>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
