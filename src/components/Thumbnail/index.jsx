import React from 'react'

//styles
import { Image } from './styles'

const Thumbnail = ( { image, movieID, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
)

export default Thumbnail