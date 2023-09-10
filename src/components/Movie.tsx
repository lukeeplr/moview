import React from 'react'
import { useParams } from 'react-router-dom'

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

//components
import Grid from './Grid'
import Loader from './Loader'
import BreadCrumb from './BreadCrumb'
import Actor from './Actor'

//hook
import { useMovieFetch } from '../hooks/useMovieFetch'

//image
import NoImage from '../images/no-image.jpg'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'


const Movie: React.FC = () => {

    const { movieID } = useParams()

    const { state: movie, loading, error } = useMovieFetch(movieID)

    if (loading) return <Loader/>
    if (error) return <div>Algo deu errado...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar revenue={movie.revenue} budget={movie.budget} runtime={movie.runtime}/>
            <Grid header={'Elenco'}>
                {movie.actors.map(actor => (
                    <Actor key={actor.credit_id} name={actor.name} character={actor.character} imageURL={actor.profile_path 
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` 
                    : NoImage}/>
                ))}
            </Grid>
        </>
    )
}
export default Movie