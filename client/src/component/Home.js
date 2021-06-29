import React from 'react'
import vinyLoop from '../styles/assets/video-loop.mp4'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
      <div className="home-container">
        <video autoPlay muted loop id="myVideo">
          <source src={vinyLoop} type="video/mp4" />
        </video>
        <div className="main-text">
          <Link to="/index"><h1>see the collection...</h1></Link>
        </div>
      </div>
    </>
  )
}

export default home
