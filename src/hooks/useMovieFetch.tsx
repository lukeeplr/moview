import { useState, useEffect } from "react";

import API, { Movie, Cast, Crew} from '../API'
import { isPersistedState } from '../helper'


export type MovieState = Movie & { actors: Cast[], directors: Crew[], }

export const useMovieFetch = (movieID: string) => {
    const [state, setState] = useState<MovieState>({} as MovieState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect( () => {
        const fetchData = async() => {
            try {
                setLoading(true)
                setError(false)
                
                const movie = await API.fetchMovie(movieID)
                const credits = await API.fetchCredits(movieID)
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                )

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })
                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }

        const sessionState = isPersistedState(movieID)
        if (sessionState) {
            setState(sessionState)
            setLoading(false)
            return
        }

        fetchData()
    }, [movieID])


    useEffect(() => {
        if (Object.keys(state).length != 0) {
            sessionStorage.setItem(movieID, JSON.stringify(state))
        }
    },[movieID, state])

    return { state, loading, error }
}