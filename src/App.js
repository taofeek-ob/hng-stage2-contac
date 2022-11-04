import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { FooterSection } from "./components";
import { Contact, Home, Success } from "./pages";

function App() {
  const [username, setUsername] = useState("");
  const name = "Taofeek";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={<Contact name={name} setUsername={setUsername} />}
          />
          <Route
            path="/success"
            element={<Success username={username} name={name} />}
          />
        </Routes>
      </Router>
      <FooterSection />
    </div>
  );
}

export default App;
