import React from 'react'

//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

//styles
import { GlobalStyle } from './GlobalStyle'

const App: React.FC = () => (
    <>
      <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movieID' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
)

export default App
