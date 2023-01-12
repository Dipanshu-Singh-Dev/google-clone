import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import SearchPage from "./Pages/SearchPage/Searchpage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/:search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
