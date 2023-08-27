import React from 'react'
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types'
export const Navbar = (props) => {
  const myStyle={
    position:"sticky",
    top:"0",
    zIndex:"3"
  }
  return (
    <div style={myStyle}><nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">UIT</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
            
            <li style={{ position: "absolute",top:'1em', right: "4em" }}>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault " style={{color:'white'}}>{props.text}</label>
                
              </div>

            </li>
          </ul >
            {props.search && <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>}
        </div >
      </div >
    </nav >
    </div >
  )
}
Navbar.defaultProps={
  search:false
}
Navbar.propTypes={
  search:PropTypes.bool
}
export default Navbar