import React from 'react';

const Header: React.FC = () => {
    return (
        <header id="header" className="header-nav py-lg-3 py-md-3">
            <nav className="collapsible-nav show" id="collapsible-nav">
                <a className="nav-link active" id="nav-home" data-remote="true" href="/"
                   style={{color: 'rgb(0, 0, 0)'}}>HOME</a>
                <a className="nav-link" id="nav-projects" data-remote="true" href="/projects"
                   style={{color: 'rgb(0, 0, 0)'}}>PROJECTS</a>
                <a className="nav-link" id="nav-blogs" data-remote="true" href="/blogs"
                   style={{color: 'rgb(0, 0, 0)'}}>BLOGS</a>
                <a className="nav-link" id="nav-contact" data-remote="true" href="/contact"
                   style={{color: 'rgb(0, 0, 0)'}}>CONTACT</a>
            </nav>
            <button className="btn btn-menu-toggle rounded-circle show bg-white" id="btn-ham"
                    data-toggle="collapsible-nav" data-target="collapsible-nav"><i className="fas fa-bars"/>
            </button>
        </header>
    );
};

export default Header;
