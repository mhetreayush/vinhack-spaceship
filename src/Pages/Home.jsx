import React, { useEffect, useState } from "react";
import { createRandomUser } from "../HelperFunctions/createUsers";
import { UserData } from "../Contexts/UsersDataContext";
import UserPage from "../Components/UserPage";
import Wrapper from "../Components/Wrapper";
import FirstName from "./FirstName";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [userArr, setUserArr] = useState([]);
  const { isSetOnce, setIsSetOnce } = UserData();
  if (!isSetOnce) {
    for (let i = 0; i < 30; i++) {
      userArr.push(createRandomUser());
    }
    setIsSetOnce(true);
  }
  const steps = ["First Name", "Your interests", "Add Photos"];
  const navigate = useNavigate();
  const startProfile = () => {
    navigate("/name");
  };
  return (
    <div className="bg-orange-200 h-screen flex w-full items-center justify-center flex-col gap-y-10">
      <div>Start Creating Your Profile</div>
      <button
        className="bg-purple-300 rounded-md p-4 w-fit"
        onClick={startProfile}
      >
        Start
      </button>
    </div>
  );
};

export default Home;
