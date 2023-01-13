import { NowUserData } from "../Contexts/UserContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
const Interests = () => {
  const navigate = useNavigate();
  const { userName, setUserName, setInterests } = NowUserData();
  const [tempName, setTempName] = useState("");
  const navigateNext = () => {
    setInterests(myInterests);
    navigate("vinhack-spaceship/photos");
  };
  const [myInterests, setMyInterests] = useState([]);
  const interests = [
    "Tennis",
    "PingPong",
    "Squash",
    "Bowling",
    "Party",
    "Football",
    "Gaming",
  ];
  return (
    <Wrapper title={"Your Interests"} bgColor="bg-orange-100">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-center">You wont be able to change this later</h1>

        {interests.map((interest, index) => {
          return (
            <button
              className={`p-4 rounded-full bg-white ${
                myInterests.includes(interest) && "bg-green-100 border-2"
              }`}
              key={index}
              onClick={() => setMyInterests([...myInterests, interest])}
            >
              {interest}
            </button>
          );
        })}

        <button className="p-4 rounded-full bg-white" onClick={navigateNext}>
          Next
        </button>
      </div>
    </Wrapper>
  );
};
export default Interests;
