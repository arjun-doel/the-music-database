import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


const SignIn = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const openModal = () => setShow(true)

  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })
  // const [errors, setErrors] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  const submitForm = e => {
    e.preventDefault()
    console.log(e.target.value)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Body>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text" className="form-control" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="passwordConfirmation" name="passwordConfirmation" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal.Body>
      </Modal>



      <section className="sign-in">
        <h1>Sign In Below...</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="register-section">
          <h3>Or register with us...</h3>
          <button onClick={openModal} className="register btn btn-primary">Register</button>
        </div>
      </section>
    </>
  )
}

export default SignIn