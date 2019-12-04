import React from 'react'

import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Home = () => {


  function notify() {
    toast('Login to create, edit and delete countries!', {
      position: 'bottom-center',
      autoClose: 4500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      exit: 'zoomOut',
      transition: Zoom
    })
  }



  return <section className="hero is-fullheight is-info">
    <div className="hero-body">
      <div className="container">
        <p className="title has-text-centered">Countries</p>
        <p className="subtitle has-text-centered">of the world</p>

        <div className="footer  has-text-centered ">
          <button className="button is-warning" onClick={() => notify()}>Questions</button>
          <ToastContainer
          />
        </div>



      </div>
    </div>
  </section >
}

export default Home