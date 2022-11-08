import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/main.css";
// import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movie/:id" element={<Detail />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
