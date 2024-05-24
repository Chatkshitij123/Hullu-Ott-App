import React, { useState } from "react";
import "./css/Navbar.css";
import request from "../Request";
const Navbar = ({setSelectedOption}) => {
  const [activekey, setActiveKey] = useState(1);
  return (
    <div className="navbar">
      <h3
        onClick={() => {
          setActiveKey(1)
          setSelectedOption(request.fetchTrending);
        }}
        className={activekey === 1 && "active"}
      >
        Trending
      </h3>
      <h3
        onClick={() => {
          setActiveKey(2)
          setSelectedOption(request.fetchTopRated);
        }}
        className={activekey === 2 && "active"}
      >
        Top Rated
      </h3>
      <h3
        onClick={() => {
          setActiveKey(3)
          setSelectedOption(request.fetchActionMovies);
        }}
        className={activekey === 3 && "active"}
      >
        Action
      </h3>
      <h3
        onClick={() => {
          setActiveKey(4)
          setSelectedOption(request.fetchComedyMovies);
        }}
        className={activekey === 4 && "active"}
      >
        Comedy
      </h3>
      <h3
        onClick={() => {
          setActiveKey(5)
          setSelectedOption(request.fetchHorroMovies);
        }}
        className={activekey === 5 && "active"}
      >
        Horror
      </h3>
      <h3
        onClick={() => {
          setActiveKey(6)
          setSelectedOption(request.fetchRomanticMovies);
          }}
        className={activekey === 6 && "active"}
      >
        Romance
      </h3>
      <h3
        onClick={() => {
          setActiveKey(7)
          setSelectedOption(request.fetchMystery);
        }}
        className={activekey === 7 && "active"}
      >
        Mystery
      </h3>
      <h3
        onClick={() => {
          setActiveKey(8)
          setSelectedOption(request.fetchSciFi);
        }}
        className={activekey === 8 && "active"}
      >
        Sci-Fi
      </h3>
      <h3
        onClick={() => {
          setActiveKey(9)
          setSelectedOption(request.fetchWestern);
        }}

        className={activekey === 9 && "active"}
      >
        Western
      </h3>
      <h3
        onClick={() => {
          setActiveKey(10)
          setSelectedOption(request.fetchTV);
        }}
        className={activekey === 10 && "active"}
      >
        Movie
      </h3>
    </div>
  );
};

export default Navbar;
