import React from 'react'

//components
import Thumbnail from '../Thumbnail'

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

//image
import NoImage from '../../images/no-image.jpg'

//styles
import { Wrapper, Content, Text } from './styles'

import { MovieState } from '../../hooks/useMovieFetch'

type Props = {
    movie: MovieState
}

const MovieInfo: React.FC<Props> = ({ movie }) => {

    return (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbnail image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} clickable={false} />
            <Text>
                <h1><b></b>{movie.title}</h1>
                <p><b>Sinopse: </b>{movie.overview}</p>
                <p><b>Nota: </b>{movie.vote_average}</p>
                <p><b>Data de lançamento: </b>{movie.release_date}</p>
                <p><b>Direção: </b>{movie.directors.map(director => director.name).join(', ')}</p>
            </Text>
        </Content>
    </Wrapper>
    ) 
}


export default MovieInfo