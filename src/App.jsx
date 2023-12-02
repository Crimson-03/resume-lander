import CareerPage from "./Pages/CareerPage/CareerPage";
import data from "../data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/Signup";
import Main from "./Pages/Main/Main";
import ApplyForm from "./Pages/ApplyForm/ApplyForm";
import TrackApplications from "./Pages/TrackApplications/TrackApplications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/main/:role" element={<Main />} />
          <Route path="applyform" element={<ApplyForm />} />
          <Route path="careerpage" element={<CareerPage data={data} />} />
          <Route
            path="/trackapplications"
            element={<TrackApplications data={data} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
