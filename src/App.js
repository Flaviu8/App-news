import "./styles.css";
import  Home  from "./pages/Home";
import ClimateChange from "./pages/ClimateChange";
import { Routes, Route } from "react-router";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";


export default function App() {
  return (
    <div>
        <Header/>
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/climate-change" element={<ClimateChange />}/>
        </Routes>
        <Footer />
    </div>
     
     
   
  );
}
