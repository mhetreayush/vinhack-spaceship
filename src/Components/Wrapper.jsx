import React, { useState } from "react";
import slugify from "slugify";
const Wrapper = ({ title, children, bgColor }) => {
  const steps = ["First Name", "Your interests", "Add Photos"];
  const colors = {
    "First Name": "#D9CCE5",
    "Your Interests": "#FFDCD0",
    "Add Photos": "#FFDCD0",
  };
  // const bgColor = `bg-[${colors[title]}]`;
  // console.log(bgColor);
  const [currentPage, setCurrentPage] = useState(steps.indexOf(title) + 1);

  const UpperBar = () => {
    return (
      <div className="flex gap-x-3 p-2 w-full rounded-md border">
        <div
          className={`h-[4px] w-[8px] rounded-md ${
            currentPage < 2 && bgColor
          } bg-black  inline`}
        ></div>
        <div
          className={`h-[4px] w-[8px] rounded-md ${
            currentPage < 3 && bgColor
          } bg-black`}
        ></div>
        <div
          className={`h-[4px] w-[8px] rounded-md ${
            currentPage < 4 && bgColor
          } bg-black`}
        ></div>
      </div>
    );
  };
  //   const image = require(`https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F77%2FGoogle_Images_2015_logo.svg%2F800px-Google_Images_2015_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Images&tbnid=d-Ji7qscokYdVM&vet=12ahUKEwjL44iSjMX8AhWoMbcAHa63AtMQMygAegUIARDgAQ..i&docid=qfPPp-mRFi6Y6M&w=800&h=275&q=google%20images&ved=2ahUKEwjL44iSjMX8AhWoMbcAHa63AtMQMygAegUIARDgAQ`);
  return (
    <div className={`flex flex-col gap-y-4 ${bgColor} p-4 h-screen`}>
      {/* <UpperBar /> */}
      <img
        src={require(`../assets/TitleImages/${slugify(
          title.toLowerCase()
        )}.png`)}
        alt={title}
      />
      {children}
    </div>
  );
};

export default Wrapper;
