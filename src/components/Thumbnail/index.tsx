import React from 'react'
import { Link } from 'react-router-dom'

//styles
import { Image } from './styles'

type Props = {
    image: string;
    movieID?: number;
    clickable: boolean;
}

const Thumbnail: React.FC<Props> = ( { image, movieID, clickable}) => (
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