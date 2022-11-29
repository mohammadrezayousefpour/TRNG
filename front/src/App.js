import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import FAQs from "./pages/FAQs/FAQs";
import GeneratePage from "./pages/GeneratePage/GeneratePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import { useEffect, useState } from "react";
import QuotaPage from "./pages/quota/QuotaPage";

function App() {
  const [userIp, setUserIp] = useState();
  useEffect(() => {}, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/random_numbers/ip/", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const raw_bytes_Object = {
    title: "Random Byte Generator",
    text: "This form can be used to generate random bytes. The randomness behind the scene comes from a true random number generator (TRNG).",
  };
  const integersObject = {
    title: "Random Integer Generator",
    text: "This form can be used to generate random integers. The randomness behind the scene comes from a true random number generator (TRNG).",
  };
  const uniform_dist_Object = {
    title: "Uniform Distribution Generator",
    text: "This form can be used to generate samples from the uniform distribution over the interval [0,1]. The randomness behind the scene comes from a true random number generator (TRNG).",
  };
  const string_object = {
    title: "Random String (Secret Key or Password) Generator",
    text: "This form can be used to generate random strings, passwords, and secret keys. The generated secret is transferred securely to your browser via TLS protocol and is not stored on random-number.org servers. The randomness behind the scene comes from a true random number generator (TRNG).",
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/FAQs" element={<FAQs />} />
          <Route
            path="/raw_bytes"
            element={
              <GeneratePage type="raw_bytes" property={raw_bytes_Object} />
            }
          />
          <Route
            path="/integers"
            element={<GeneratePage type="integers" property={integersObject} />}
          />
          <Route
            path="/uniform_dist"
            element={
              <GeneratePage type="uniform" property={uniform_dist_Object} />
            }
          />
          <Route
            path="/qr_code"
            element={<GeneratePage type="qrcode" property={""} />}
          />
          <Route
            path="/rnd_str"
            element={<GeneratePage type="rnd_str" property={string_object} />}
          />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/quota" element={<QuotaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
