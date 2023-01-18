import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Homepage from "./Pages/Homepage/Homepage";
import SearchPage from "./Pages/SearchPage/Searchpage";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route>
            <Route index element={<Homepage />} />
            <Route path="search">
              <Route index element={<SearchPage />} />
              {/* <Route path="vids" element={<VidSearch />} />
              <Route path="images" element={<ImgSearch />} />
              <Route path="news" element={<NewsSearch />} />
              <Route path="shopping" element={<ShopSearch />} />
              <Route path="books" element={<BookSearch />} />
              <Route path="maps" element={<MapSearch />} />
              <Route path="maps" element={<MapSearch />} />
              <Route path="maps" element={<MapSearch />} />
              <Route path="maps" element={<MapSearch />} /> */}
            </Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
