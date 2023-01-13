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
              <Route path="/" element={<Home />} />
              <Route path="/name" element={<FirstName />} />
              <Route path="/interests" element={<Interests />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/find" element={<Find />} />
            </Routes>
          </PhoneWrapper>
        </UserContextProvider>
      </UserDataContextProvider>
    </Router>
  );
};

export default App;
