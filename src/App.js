import { useEffect, useState } from "react";
import "./App.css";
import { h1 } from "fontawesome";
import Header from "./Components/Header";
import Footr from "./Components/Footr";
import Landingpage from "./Pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import Viewproducts from "./Components/Viewproducts";


function App() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((posts) => setposts(posts));
  }, []);

  return (
    <>
    <Header ></Header>
      <div className="container m-5">
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/viewproducts" element={<Viewproducts/>} />
        </Routes>
       

      </div>
      <Footr></Footr>
    </>
  );
}

export default App;
