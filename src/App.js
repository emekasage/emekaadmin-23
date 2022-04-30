import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  const { createMemoryHistory } = require("history");
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
