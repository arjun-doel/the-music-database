import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'


const Index = () => {
  const [getMusic, setGetMusic] = useState([])
  const [show, setShow] = useState(false)
  const [modalInfo, setModalInfo] = useState([])
  const handleClose = () => setShow(false)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/music')
      setGetMusic(data)
    }
    getData()

  }, [])


  const openModal = e => {
    const id = e.target.id
    console.log(id)
    const filteredArray = getMusic.filter(ite => ite._id === id)
    setModalInfo(filteredArray)
    setShow(true)
  }

  console.log(modalInfo)

  return (
    <>
      <section className="collection">

        <header>
          <h1>the collection</h1>
        </header>

        {modalInfo.map(ite =>
          <>
            <Modal key={ite._id} show={show} onHide={handleClose} dialogClassName="my-modal">
              <div className="modal-header">
                <h2>{ite.album}</h2>
                <h3>{ite.artist}</h3>
              </div>
              <Modal.Body>
                <div className="modal-body">
                  <div className="img-text">
                    <img src={ite.artwork} alt={ite.album} />
                    <div className="album-inf">
                      <h6>Genre:</h6>
                      <p>{ite.genre}</p>
                      <hr/>
                      <h6>Sub Genre:</h6>
                      <p>{ite.subGenre}</p>
                      <hr/>
                      <h6>Released:</h6>
                      <p>{ite.releaseDay}/{ite.releaseMonth}/{ite.releaseYear}</p>
                      <hr/>
                      <h6>Label:</h6>
                      <p>{ite.label}</p>
                      <hr/>
                    </div>
                    <div className="track-list">
                      <h6>Track-Listing</h6>
                      <ol>
                        {ite.trackListing.map(trk => 
                          <li key={trk}>{trk}</li>
                        )}
                      </ol>
                    </div>
                  </div>
                  <div className="credits">
                    <h3>Musicians</h3>
                    <ul>
                      {ite.musicians.map(mus =>
                        <li key={mus}>{mus}</li>
                      )}
                    </ul>
                    <h3>Production</h3>
                    <ul>
                      {ite.production.map(mus =>
                        <li key={mus}>{mus}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </>
        )}



        <div className="card-wrapper">
          {getMusic.map(ite =>
            <>
              <div key={ite._id} className="card">
                <div className="album-cover">
                  <img src={ite.artwork} alt={ite.album} onClick={openModal} id={ite._id} />
                </div>
                <div className="album-name">
                  <h4>{ite.album}</h4>
                </div>
              </div>
            </>
          )}
        </div>

      </section>
    </>
  )
}

export default Index
