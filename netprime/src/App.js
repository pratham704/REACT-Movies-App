import React from "react";
import Header from "./components/Header";
import "./App.css"
import SimpleBottomNavigation from "./components/SimpleBottomNavigatio";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Movies } from "./components/Movies";
import { Trending } from "./components/Trending";
import { Series } from "./components/Series";
import Search from "./components/Search";
function App() {
  return (
<>
<Header />

  

<BrowserRouter>
<Routes>

<Route exact  path="/" element={<Trending/>} ></Route>
<Route path="/movies" element={<Movies/>}></Route>
<Route path="/series" element={<Series/>}></Route>
<Route path="/search" element={<Search/>}></Route>

</Routes>


<SimpleBottomNavigation/>

</BrowserRouter>




      

    </>
  );
}

export default App;
