import moment from "moment/moment";
import BgImage from "../assets/profileBg.png";
import { NowUserData } from "../Contexts/UserContext";
import { UserData } from "../Contexts/UsersDataContext";
const robohashAvatars = require("robohash-avatars");
const UserPage = ({ data }) => {
  const { _id, birthday, firstName, lastName, sex, interests } = data;
  const { interests: userInterests } = NowUserData();
  return (
    <div
      className="h-[75vh] rounded-md flex flex-col justify-end py-4 text-white font-semibold text-2xl"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-200/20 rounded-md wi-fit p-2">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{moment(birthday).format("MMM Do YY")}</p>
        <p>{sex}</p>
        <p>My interests: {userInterests?.join(" ")}</p>
        <p>Their interests: {interests.join(" ")}</p>
      </div>
    </div>
  );
};

export default UserPage;
