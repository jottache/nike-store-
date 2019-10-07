import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Home.css'

const Home = () =>{
    return(
        <>
            <Link to="/men">
                <section className="section_shoes men">
                    <h2>Men Shoes</h2>
                </section>
            </Link>
            <Link to="/women">
                <section className="section_shoes women">
                    <h2>Women Shoes</h2>
                </section>
            </Link>
        </>
    )
}

export default Home;