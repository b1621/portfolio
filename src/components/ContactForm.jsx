import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    // send email using Emailjs
    // https://dev.to/ebereplenty/contact-form-with-emailjs-react-581c
    <div>
      <form action="" className="pl-28 space-y-4">
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            className=" w-full bg-slate-800 outline-none p-2 "
            type="text"
            name="name"
            placeholder="full name"
            id="name"
          />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            className=" w-full bg-slate-800 outline-none p-2 "
            type="email"
            placeholder="test@example.com"
            name="email"
            id="email"
          />
        </div>
        <div className="">
          <label htmlFor="subject">Subject</label>
          <input
            className=" w-full bg-slate-800 outline-none p-2 "
            type="subject"
            placeholder="email subject"
            name="subject"
            id="subject"
          />
        </div>
        <div className="">
          <label htmlFor="message">Message</label>
          <textarea
            className=" w-full bg-slate-800 outline-none p-2 "
            name="message"
            id="message"
            cols="30"
            rows="6"
          ></textarea>
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
