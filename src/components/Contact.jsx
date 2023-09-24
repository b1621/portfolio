import React from "react";
import Button from "./Button";

const Contact = ({ id }) => {
  return (
    <div id={id} className="h-screen">
      <h2>Contact</h2>
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
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div className=" w-24">
          <Button> Submit </Button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
