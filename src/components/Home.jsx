import React from 'react'


//configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config.js'


//components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumbnail from './Thumbnail'
import Loader from './Loader.jsx'
import SearchBar from './SearchBar/index.jsx'


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch.jsx'


//images
import NoImage from '../images/no-image.jpg'


const Home = () => {

    const { state, loading, error, searchTerm, setSearchTerm} = useHomeFetch() 

    return (
        <>
        {state.results[0] && <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        />}
        <SearchBar setSearchTerm={setSearchTerm}/>
         <Grid header={searchTerm ? 'Results' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumbnail 
                key={movie.id}
                image={
                    movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieID={movie.id}
                clickable={true}
                 />
                )
            )}
            </Grid>  
        </>
    )
}

export default Home