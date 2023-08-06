import React from "react";
import Button from "./Button";

const AboutMe = () => {
  return (
    <div className=" h-screen border-t border-red-950 py-16">
      <h2 className=" text-center text-4xl my-14">About Me</h2>
      <div className="flex flex-row gap-5  w-2/3 mx-auto">
        <div className="">
          <img src="./boy.jpg" className=" w-[900px]" alt="" />
        </div>
        <div className=" text-md my-3 p-2">
          <p>
            Howdy, My Name Is Wadee-_-Haddad A Cyber-Security Student At Amman
            Arab University, Born On May 25, 2004. I've Accomplished Several
            Notable Achievements, Including Receiving An Academic Acceleration
            From The Ministry Of Education In Jordan.
            <br />
            <br />
            In The Field Of Cyber-Security, I Ranked 3rd In Cyber-Talents In
            Jordan And 21st Globally. Additionally, I Achieved A 2% Ranking On
            The Tryhackme Platform. My Areas Of Interest And Expertise Include
            Reverse Engineering, Web Security, OSINT, Cryptanalysis, And Malware
            Analysis.
          </p>
          <div className="flex my-10 gap-10 w-fit mx-auto">
            <Button>Download Cv</Button>
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
