import React from 'react'
import { useParams } from 'react-router-dom'

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

//components
import Grid from './Grid'
import Loader from './Loader'
import BreadCrumb from './BreadCrumb'

//hook
import { useMovieFetch } from '../hooks/useMovieFetch'

//image
import NoImage from '../images/no-image.jpg'


const Movie = () => {

    const { movieID } = useParams()

    const { state: movie, loading, error } = useMovieFetch(movieID)

    if (loading) return <Loader/>
    if (error) return <div>something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
        </>
    )

}
export default Movie