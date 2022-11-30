import "./styles.css";
import  Home  from "./pages/Home";
import ClimateChange from "./pages/ClimateChange";
import { Routes, Route } from "react-router";


export default function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/climate-change" element={<ClimateChange />}/>
      </Routes>
     
   
  );
}
