import React from 'react'
import { useParams } from 'react-router-dom'

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

//components
import Grid from './Grid'
import Loader from './Loader'

//hook
import { useMovieFetch } from '../hooks/useMovieFetch'

//image
import NoImage from '../images/no-image.jpg'


const Movie = () => {

    const { movieID } = useParams()

    const { state: movie, loading, error } = useMovieFetch(movieID)

    console.log(movie)

    return (
        <>
            <div>Movie</div>
        </>
    )

}
export default Movie