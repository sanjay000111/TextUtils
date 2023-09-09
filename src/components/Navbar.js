import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.Title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">{props.AboutText}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
                </div>
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button> */}
            </form>
            </div>
        </div>
        </nav>
    )
}


Navbar.propTypes = {
    Title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    Title: "Set Title", 
    AboutText: "About"
}

