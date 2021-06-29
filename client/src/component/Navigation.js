import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <div className="my-nav">
        <Link to="/"><h1>the music database <i className="fas fa-compact-disc"></i></h1></Link>
        <div className="log-wrapper">
          <i className="fas fa-signature"></i>
          <Link to="/signin"><i className="fas fa-sign-in-alt"></i></Link>  
        </div>
      </div>
    </>
  )
}

export default Navigation
