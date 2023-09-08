import React from 'react'

//styles
import { Wrapper, Image } from './styles'

const Actor = ({ name, character, imageURL }) => {

    return (
        <Wrapper>
            <Image src={imageURL} alt={name} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )

}

export default Actor