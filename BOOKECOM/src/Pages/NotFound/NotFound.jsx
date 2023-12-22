import React from 'react'
import './NotFound.css'

import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='NotFound'>
            <div className="container not-found-container">
                <h1>404</h1>
                <h3>Oops, Page Not Found</h3>
                <Link to={"/"} className='btn btn-border'>Go Back</Link>
            </div>
        </section>
    )
}

export default NotFound