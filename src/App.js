import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import MenShoes from './Components/men-shoes/Men-shoes'
import {BrowserRouter, Route} from 'react-router-dom'
const App = () => (
    <>
        <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/men" component={MenShoes}/>
        {/* <Route exact path="/women" component={WomenShoes}/> */}
        </BrowserRouter>
    </>
)

export default App;