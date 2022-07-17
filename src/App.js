import "./App.css";
import SideBar from "./Components/SlideBar/SlideBar";
import Home from "./Components/Home/Home";
import Widgets from "./Components/Widgets/Widgets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDashboard from "./Page/MovieDashboard/MovieDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <SideBar />
                <Home />
                <Widgets />
              </>
            }
          />

          <Route
            path="/:type/:id"
            element={
              <>
            
                <MovieDashboard/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
