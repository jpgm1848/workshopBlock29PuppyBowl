import "./App.css";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>App</h1>
      <NavBar />
      <Routes>
        {/* Path is what is added to our Base URL, element is the React component that is rendered */}
        <Route path="/" element={<AllPlayers />}></Route>
        {/* Colon in front of id is a request parameter, placeholder for some value. Inside of the SinglePlayer component, useParams will be able to access that id and request for that specific player.*/}
        <Route path="/players/:id" element={<SinglePlayer />}></Route>
      </Routes>
    </>
  );
}

export default App;
