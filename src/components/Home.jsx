import React, { useEffect, useState } from 'react'


//configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config.js'


//components
import HeroImage from './HeroImage'


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch.jsx'


//images
import NoImage from '../images/no-image.jpg'


const Home = () => {

    const { state, loading, error} = useHomeFetch() 

    console.log(state)

    return (
        <>
        {state.results[5] && <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[5].backdrop_path}`}
        title={state.results[5].original_title}
        text={state.results[5].overview}
        />}
            
        </>
    )
}

export default Home