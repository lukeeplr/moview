import React from 'react'


//configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config.js'


//components
import HeroImage from './HeroImage/index.jsx'
import Grid from './Grid/index.jsx'
import Thumbnail from './Thumbnail/index.jsx'
import Loader from './Loader.jsx'
import SearchBar from './SearchBar/index.jsx'
import Button from './Button/index.jsx'


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch.jsx'


//images
import NoImage from '../images/no-image.jpg'


const Home: React.FC = () => {

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch() 

    if (error) return <div>Algo deu errado...</div>

    return (
        <>
        {state.results[0] && <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        />}
        <SearchBar setSearchTerm={setSearchTerm}/>
         <Grid header={searchTerm ? 'Resultados' : 'Em alta'}>
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
            {loading && <Loader />}
            {state.page < state.total_pages && !loading && <Button text='ver mais' callback={() => setIsLoadingMore(true)}/>}  
        </>
    )
}

export default Home