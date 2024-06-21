import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  // handle search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className=" p-2 flex flex-col items-center bg-blue-200">
      <div className="w-[98%] p-2">
        <Navbar
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
        <Routes>
          <Route
            path={"/"}
            element={
              <Home
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
            }
          />
          <Route path={"/favorites"} element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
