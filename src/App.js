import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "e8756faa";
  const APP_KEY = "b68b0b4cc20362d37e8ae3664007f672";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();

    console.log(data);
  };

  return (
    <div className="App">
      <form className="searchForm">
        <input type="text" className="searchBar" />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
