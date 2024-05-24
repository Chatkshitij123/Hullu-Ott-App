
import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import "./css/Results.css";

import { Skeleton } from 'antd';
import instance from '../axios';

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  //useffect

  useEffect(() => {
    async function fetchData() {
      setMovies([]);
      const request = await instance.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  console.log(movies);

  return (
    <div className="results">
      {!movies.length && (
        <div className="skeletons">
          {[...Array(20)].map((_, idx) => (
            <Skeleton.Input 
              key={idx} 
              active 
              style={{ width: 240, height: 350, margin: "20px", borderRadius: "4%" }} 
            />
          ))}
        </div>
      )}
      {movies.map((data, idx) => (
        <VideoCard key={data.id || idx} data={data} />
      ))}
    </div>
  );
};

export default Results;

