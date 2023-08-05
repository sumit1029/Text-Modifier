import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar title="TextTutils" about="About Us"/>
      
        <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
