import { useState, useEffect } from 'react'

//api
import API, { Movie } from '../API'

import { isPersistedState } from '../helper'

const initialState = {
    page: 0,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    
    const fetchMovies = async (page: number, searchTerm = '') => {
        try {
            setError(false)
            setLoading(true)
            
            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies, 
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
            
            setLoading(false)

        } catch (error) {
            setError(true)
        }
    }

    useEffect( () => {

        if (!searchTerm) {
            const sessionState = isPersistedState('homeState')
            if (sessionState) {
                setState(sessionState)
                return
            }
        }

        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm])

    useEffect( () => {
        if (!isLoadingMore) return

        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false)
    },[isLoadingMore, searchTerm, state.page])

    useEffect( () => {
        if (!searchTerm && state.page != 0) {
            sessionStorage.setItem('homeState', JSON.stringify(state))
        }
    }, [searchTerm, state])


    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore}

}