import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectScreenHeight,
  updateMenuDisplay,
  updateScreenSize,
} from "./store/searchSlice";

function App() {
  const dispatch = useDispatch();
  const displayHeight = useSelector(selectScreenHeight);

  useEffect(() => {
    const handleScreenSizeChange = (e) => {
      dispatch(updateScreenSize());
      dispatch(updateMenuDisplay());
    };

    window.addEventListener("resize", handleScreenSizeChange);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleScreenSizeChange);
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="Wrapper" style={{ minHeight: displayHeight - 96 }}>
        <Menu className="box1" />
        <Cards className="box2" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
