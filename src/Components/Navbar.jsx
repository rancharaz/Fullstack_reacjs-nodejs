import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dojo Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/testing">Testing</Link>

            </div>
        </nav>
    )
}

export default Navbar