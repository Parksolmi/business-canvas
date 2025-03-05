import { Routes, Route } from "react-router-dom";
import "./App.css";
import MemberListPage from "./pages/MemberListPage";
import checkLocalEnv from "./utils/checkLocalEnv";

function App() {
  console.log(checkLocalEnv());
  return (
    <Routes>
      <Route path="/" element={<MemberListPage />} />
    </Routes>
  );
}

export default App;
