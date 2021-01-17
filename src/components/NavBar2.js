import React from 'react'
import "./Navbar2.css"

function NavBar2() {
    return (
        <>
            <navbar>
                <ul className="nav-list2">
                    <li className="nav-item2">
                        <a href="#">LOGO</a>
                    </li>
                    <li className="nav-item2">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item2">
                        <a href="#">Services</a>
                    </li>
                    <li className="nav-item2">
                        <a href="#">Products</a>
                    </li>
                    <li className="nav-item2">
                        <button>Donate</button>
                    </li>
                </ul>
            </navbar>
        </>
    )
}

export default NavBar2
