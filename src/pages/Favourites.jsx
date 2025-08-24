import React from 'react'
import '../css/Favourites.css'
import MovieCard from '../components/MovieCard';
import { useMovieContext } from "../components/contexts/MovieContext";

export default function Favourites(){

  const {favorites} = useMovieContext();

  if(favorites && favorites.length > 0){
    return (
      <div className="favorites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favorites.map((movie)=> (<MovieCard movie={movie} key={movie.id} />))}
        </div>
      </div>
    );
  }
   return (
    <div className='favorites-empty'>
      <h2>No Favourites Movies Yet</h2>
      <p>Start adding movies to your favourites</p>
    </div>
  )
}
