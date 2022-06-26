import React, { useEffect, useState } from 'react'
import { baseTMDBPath, tmdb } from '../pages';

function Banner({movie}) {
    const [genres, setGenres] = useState([])

    useEffect(() =>{
        const getGenres = async() =>{
            const res = await tmdb.getGenres()
            setGenres(res.genres.filter(genre=>movie.genre_ids.includes(genre.id)).map(genre=>genre.name))
        }
        getGenres()
    },[movie.genre_ids])

  return (
        <div className="flex m-20 overflow-hidden bg-black/70 rounded-3xl h-96 xl:h-[27rem]">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url("${baseTMDBPath+movie.backdrop_path}")`}}></div>
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>

            <div className="text-white flex w-4/5 flex-col justify-around relative">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <div>
                    <button className="bg-pink-500 py-2 px-10 rounded-full">{genres[0]}</button>
                </div>
                
                <p className="pt-2 px-10">{movie?.overview}</p>
                
                <div className="flex text-white justify-around">
                    <p>Popularity: <span className="font-bold text-red-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.popularity.toFixed(0)}</span></p>
                    <p>Avarage Vote: <span className="font-bold text-green-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.vote_average}</span></p>
                    <p>Vote Count: <span className="font-bold text-orange-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.vote_count}</span></p>
                </div>
                <div className="flex items-center justify-around ">
                </div>
            </div>
        </div>
  )
}

export default Banner