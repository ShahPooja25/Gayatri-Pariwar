import Navbar from "./Navbar";
import Home from "./pages/Home";
import Campaign from "./pages/Campaign";
import Report from "./pages/Report";
import {Route, Routes} from "react-router-dom"
function App() {

  return (
  <><Navbar />
  <div className="container">
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/Campaign" element = {<Campaign />} />
      <Route path = "/Report" element = {<Report />} />   
    </Routes>
  </div>
  </>
  )
}
export default App