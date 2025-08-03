import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./Menu";
import FoodItem from "./FoodItem";
import NotFound from "./NotFound";
import AddItemForm from "./AddItemForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks,setDrinks] = useState([])

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
    useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      console.log(drinks)
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks}/>}/>
            <Route path="/snacks" element={
              <>
              <Menu items={snacks} title="Snacks" basePath="snacks"/>
              <AddItemForm type="snack"/>
              </>
            }
              />
            <Route path="/drinks" element={
              <>
              <Menu items={drinks} title="Drinks" basePath="drinks"/>
              <AddItemForm type="drink"/>
              </>
            }
              />
            <Route path="/snacks/:id" element={<FoodItem items={snacks} cantFind={"/snacks"}/>}/>
            <Route path="/drinks/:id" element={<FoodItem items={drinks} cantFind={"/drinks"}/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
