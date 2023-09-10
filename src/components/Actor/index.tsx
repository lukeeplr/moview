import React from 'react'

//styles
import { Wrapper, Image } from './styles'

type Props = {
    name: string;
    character: string;
    imageURL: string;
}

const Actor: React.FC<Props> = ({ name, character, imageURL }) => {

    return (
        <Wrapper>
            <Image src={imageURL} alt={name} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )

}

export default Actor