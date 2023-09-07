import React from 'react'
import { Link } from 'react-router-dom'

//styles
import { Image } from './styles'

const Thumbnail = ( { image, movieID, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieID}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb' />
        )}
    </div>
)

export default Thumbnail