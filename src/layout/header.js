import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header id="mu-hero">
    		<div className="container">
    			<nav className="navbar navbar-expand-lg navbar-light mu-navbar">
    				<a className="navbar-brand mu-logo" href="index.html"><span>B-HERO</span></a>
    			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    			    <span className="fa fa-bars"></span>
    			  </button>
    			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    			    <ul className="navbar-nav mr-auto mu-navbar-nav">
    			      <li className="nav-item active">
                  <Link to="/">Home</Link>

    			      </li>
    			      <li className="nav-item"><Link to="/about-us">About us</Link></li>
    			      <li className="nav-item"><Link to="/services">Services</Link></li>
    			      <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
  			        <li className="nav-item dropdown">
				          <a className="dropdown-toggle" href="blog.html" role="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
			            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  				          <a className="dropdown-item" href="blog.html">Blog Archive</a>
  				          <a className="dropdown-item" href="blog-single.html">Blog Single</a>
  				        </div>
    				    </li>
  			        <li className="nav-item"><a href="contact.html">Contact us</a></li>
  			        <li className="nav-item"><a href="404.html">404 Page</a></li>
    			    </ul>
    			  </div>
    			</nav>
    		</div>
    	</header>
    )
  }
}
