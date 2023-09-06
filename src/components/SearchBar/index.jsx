import React, { useEffect, useState, useRef } from 'react'

//styles
import { Wrapper, Content } from './styles'

//icons
import { BsSearch } from 'react-icons/bs'


const SearchBar = ({ setSearchTerm }) => {

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
                <BsSearch />
                <input type="text"
                placeholder='search movie'
                onChange={e => setState(e.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar