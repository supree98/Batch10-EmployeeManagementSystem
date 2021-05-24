import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
    return <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-link" to="/createaccount">Create Account</Link>
                        <Link class="nav-link" to="/showaccount">Show Account</Link>
                        <Link class="nav-link" to="/about">About</Link>
                    </div>
                </div>
            </nav>
    </div>
}

export default Navbar;