import { NowUserData } from "../Contexts/UserContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
const Photos = () => {
  const navigate = useNavigate();
  const { userName, setUserName } = NowUserData();
  const [tempName, setTempName] = useState("");
  const navigateNext = () => {
    navigate("/find");
  };
  const [photos, setPhotos] = useState([]);
  return (
    <Wrapper title={"Add Photos"} bgColor="bg-yellow-100">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-center">Name: {userName}</h1>
        {[1, 2, 3, 4].map((item, index) => {
          return <input type="file" className="p-4 rounded-full bg-white " />;
        })}
      </div>
      <button className="p-4 rounded-full bg-white" onClick={navigateNext}>
        Next
      </button>
    </Wrapper>
  );
};
export default Photos;
