import { UserContextProvider } from "./Contexts/UserContext";
import { UserDataContextProvider } from "./Contexts/UsersDataContext";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import FirstName from "./Pages/FirstName";
import Interests from "./Pages/Interests";
import Photos from "./Pages/Photos";
import Find from "./Pages/Find";
import PhoneWrapper from "./Components/PhoneWrapper";
const App = () => {
  return (
    <Router>
      <UserDataContextProvider>
        <UserContextProvider>
          <PhoneWrapper>
            <Routes>
              <Route path="vinhack-spaceship/" element={<Home />} />
              <Route path="vinhack-spaceship/name" element={<FirstName />} />
              <Route
                path="vinhack-spaceship/interests"
                element={<Interests />}
              />
              <Route path="vinhack-spaceship/photos" element={<Photos />} />
              <Route path="vinhack-spaceship/find" element={<Find />} />
            </Routes>
          </PhoneWrapper>
        </UserContextProvider>
      </UserDataContextProvider>
    </Router>
  );
};

export default App;
