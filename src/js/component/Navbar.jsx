import React from "react";

const Navbar = ({title,link1,link2,link3,link4}) => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">{link1}</a>
                        <a className="nav-link" href="#">{link2}</a>
                        <a className="nav-link" href="#">{link3}</a>
                        <a className="nav-link disabled">{link4}</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar