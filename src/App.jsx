import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./sideMenus/overview/Overview";
import Tickets from "./sideMenus/tickets/Tickets";
import "./App.css"
// import Linechart from "./components/Linechart";

const App = () => {
  return (
    <BrowserRouter>
     <div className="grid">
      <Sidebar />
     <Routes>
      <Route path="/" element={<Overview/>}/>
      <Route path="/tickets" element={<Tickets/>}/>
     </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

