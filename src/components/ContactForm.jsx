import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("loging form data = ", form);
    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    if (isEmpty) {
      // Display error toast for empty input fields
      toast.error("Please fill out all fields");
    } else {
      // All input fields are filled, proceed with sending email
      emailjs
        .sendForm(
          "service_w915e5i",
          "template_9zo6ibh",
          form.current,
          "45nC1X8qJ0i4bcD5t"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setFormData({ user_name: "", user_email: "", message: "" });
            toast.success("Email sent successfully");
          },
          (error) => {
            console.log(error.text);

            // commenting error handling statement for testing purpose

            // if (error.response) {
            //   // The request was made and the server responded with an error status code
            //   // setError(error.response.data.message);
            //   toast.error(error.text);
            //   console.error(error.response.data);
            // } else if (error.request) {
            //   // The request was made but no response was received
            //   console.error("No response received:", error.request);
            // } else {
            //   // Something happened in setting up the request that triggered an error
            //   console.error("Request error:", error.message);
            // }
          }
        );
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_w915e5i",
  //       "template_9zo6ibh",
  //       form.current,
  //       "45nC1X8qJ0i4bcD5t"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         e.target.reset();
  //         toast.success("Email sent successfuly ");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         if (error.response) {
  //           // The request was made and the server responded with an error status code
  //           // setError(error.response.data.message);
  //           toast.error(error.text);
  //           console.error(error.response.data);
  //         } else if (error.request) {
  //           // The request was made but no response was received
  //           console.error("No response received:", error.request);
  //         } else {
  //           // Something happened in setting up the request that triggered an error
  //           console.error("Request error:", error.message);
  //         }
  //       }
  //     );
  // };
  return (
    // send email using Emailjs
    // https://dev.to/ebereplenty/contact-form-with-emailjs-react-581c
    <div className="">
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="ml-48 lg:ml-24 md:ml-20 w-full space-y-4"
      >
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            className=" w-full bg-slate-800 outline-none p-2 focus:shadow-lg focus:shadow-green-800  rounded"
            type="text"
            name="user_name"
            placeholder="full name"
            id="name"
            value={formData.user_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            // className=" w-full bg-slate-800 outline-none p-2  focus:outline-green-700 focus:outline focus:outline-offset-1 rounded"
            className=" w-full bg-slate-800 outline-none p-2 focus:shadow-lg focus:shadow-green-800  rounded-md"
            type="email"
            placeholder="test@example.com"
            name="user_email"
            id="email"
            value={formData.user_email}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="">
          <label htmlFor="subject">Subject</label>
          <input
            className=" w-full bg-slate-800 outline-none p-2 "
            type="subject"
            placeholder="email subject"
            name="subject"
            id="subject"
          />
        </div> */}
        <div className="">
          <label htmlFor="message">Message</label>
          <textarea
            className=" w-full bg-slate-800 outline-none p-2  focus:outline-green-700 focus:outline focus:outline-offset rounded"
            name="message"
            id="message"
            cols="30"
            rows="6"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className=" w-24">
          <Button> Submit </Button>
          <input type="submit" value="Send" />
          {/* <button type="submit">Submit</button> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
