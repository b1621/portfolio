import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="border">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border bg-slate-400 outline-none p-2 "
            type="text"
            name="name"
            id="name"
          />
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
          {/* <button type="submit">Submit</button> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
