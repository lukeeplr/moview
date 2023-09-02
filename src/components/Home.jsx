import React, { useState } from 'react'

//configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config.js'


//components


//hooks



//images
import NoImage from '../images/no-image.jpg'


const Home = () => {
    
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    return (
        <div>
            home page
        </div>
    )
}

export default Home