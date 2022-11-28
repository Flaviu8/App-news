import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Climate from "./components/climate/Climate";
import Urban from "./components/urban/Urban";
import Video from "./components/video/Video";
import Footer from "./components/footer/footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Climate />
      <Urban />
      <Video />
      <Footer />
    </div>
  );
}
