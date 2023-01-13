import { NowUserData } from "../Contexts/UserContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import { createRandomUser } from "../HelperFunctions/createUsers";
import UserPage from "../Components/UserPage";
const Find = () => {
  const navigate = useNavigate();
  const { userName, setUserName } = NowUserData();
  const [tempName, setTempName] = useState("");
  let userArr = [];
  for (let i = 0; i < 30; i++) {
    userArr.push(createRandomUser());
  }
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        {userArr.map((item, index) => {
          return <UserPage data={item} />;
        })}
      </div>
    </div>
  );
};
export default Find;
