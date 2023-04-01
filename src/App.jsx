import Page from "./pages/Page";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Page />} />
        <Route path="/balanceSheet" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
