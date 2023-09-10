import React, { useEffect, useState, useRef } from 'react'

//styles
import { Wrapper, Content } from './styles'

//icons
import { FaSearch } from 'react-icons/fa'

type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {

    const [state, setState] = useState('')
    const initial = useRef(true)

    useEffect( () => {

        if (initial.current) {
            initial.current = false
            return
        }

        const timer = setTimeout( () => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)
    }, [state])

    return (
        <Wrapper>
            <Content>
                <FaSearch />
                <input type="text"
                placeholder='busque um filme'
                onChange={e => setState(e.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar