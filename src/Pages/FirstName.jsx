import { NowUserData } from "../Contexts/UserContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
const FirstName = () => {
  const navigate = useNavigate();
  const { userName, setUserName } = NowUserData();
  const [tempName, setTempName] = useState("");
  const navigateNext = () => {
    setUserName(tempName);
    navigate("vinhack-spaceship/interests");
  };
  return (
    <Wrapper title={"First Name"} bgColor="bg-blue-100">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-center">You wont be able to change this later</h1>
        <input
          type="text"
          className="p-4 rounded-full bg-white "
          placeholder="Type Something..."
          onChange={(e) => setTempName(e.target.value)}
        />
        <button className="p-4 rounded-full bg-white" onClick={navigateNext}>
          Next
        </button>
      </div>
    </Wrapper>
  );
};
export default FirstName;
