import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import FAQs from "./pages/FAQs/FAQs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
