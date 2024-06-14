import React from 'react'
import About from './pages/About';
import Menu from './pages/Menu';
import Main from './pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <Routes>

            <Route path='/' element={<Main/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Menu' element={<Menu/>}/>

        </Routes>
        </BrowserRouter>

        
     )
}
export default App;