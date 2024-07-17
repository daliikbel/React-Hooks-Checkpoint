import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Navigate from './components/Navigate';

function App() {

  const [movieList , setMovieList] = useState([
    {
      title: "Avatar",
      Description: "A marine paraphernalia travels to the Pandora moon for a unique mission that will enter your order and protect the world from the beginning.",
      posterUrl: "https://fr.web.img2.acsta.net/c_310_420/pictures/22/08/25/09/04/2146702.jpg",
      rating: 3,
    },
    {
      title: "Titanic",
      Description: "Southampton, April 10, 1912. The largest and most modern liner in the world, renowned for its unsinkability, the Titanic, sets sail for its first voyage. Four days later, it hits an iceberg. On board, a poor artist and a wealthy bourgeois woman fall in love.",
      posterUrl: "https://cdn.vox-cdn.com/thumbor/A4IYRwrVAQmgrg2vFlnh5XtxJjY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24422715/Titanic25th_NonFeat_ParamountPictures_Ringer.jpg",
      rating: 5,
    },
    {
      title: "Léon",
      Description: "Leon is a professional, redoutable and insaissable teacher. He lives in New York with a large plant and other habitual places around the world, and a small Mathilda that comes to us at home and causes damage to our lives.",
      posterUrl: "https://www.ecranlarge.com/content/uploads/2023/09/sdy7ogawqkzuh1nvpeuefsnba8e-974.jpg",
      rating: 4,
    },
    {
      title: "Togo",
      Description: "En 1925, un homme et ses chiens de traineau ont dû parcourir en urgence 700 kilomètres jusqu'à la ville de Nome en Alaska, avec à bord un serum pouvant guérir une épidémie.",
      posterUrl: "https://fr.web.img2.acsta.net/c_310_420/pictures/20/03/18/11/52/4165951.jpg",
      rating: 5,
    }
  ])

  const [searchInput , setSearchInput] = useState("")
  const [rateInput , setRateInput] = useState(1)


  const addNewMovie = (movie) => {
    setMovieList([
      ...movieList , movie
    ])
  }


  const handleSearch = (text) => {
    setSearchInput(text)
  }

  const handleRateInput = (number) => {
    console.log('number', number)
    setRateInput(number)
  }



  return (
    <div>
      <Navigate/>
      <div className='my-3 text-end me-5'>
       <AddMovie addNewMovie={addNewMovie} />
      </div>

      <div className='my-3 text-start ms-5'>
          <Filter handleSearch={handleSearch}  handleRateInput = {handleRateInput}/>
      </div>

    
      <MovieList data={movieList.filter((elm)=> elm.title.toLowerCase().includes(searchInput.toLowerCase().trim()) && elm.rating >= rateInput  )}/>


    </div>

  );
}

export default App;