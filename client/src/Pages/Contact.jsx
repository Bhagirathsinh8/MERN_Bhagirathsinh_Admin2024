import React, { useState } from 'react'

export default function Contact() {
  const [user,setUser] = useState({
    username: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form  Submitted:",user);
    setUser({
      username: '',
      email: '',
      phone: '',
      message: ''
    })
  }
  return (
    <>
      <div className="container border mt-5 w-50 p-3 h-50 shadow p-3 mb-5 bg-body-tertiary rounded ">
        <h1 className="d-flex justify-content-center">Contact Form</h1>
        <form id="contact_form" name="contact_form" method="POST">
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor='name'>Username</label>
              <input
                type="text"
                required
                maxLength="50"
                className="form-control"
                id="username"
                name="username"
                placeholder="Your Name"
                value={user.username}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-4 row">
            <div className="col">
              <label htmlFor="email_addr">Email address</label>
              <input
                type="email"
                required
                maxLength="50"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="phone_input">Phone</label>
              <input
                type="number"
                required
                maxLength="50"
                className="form-control"
                id="phone_input"
                name="phone"
                placeholder="Phone"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={user.message}
                onChange={handleInput}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary px-4 btn-lg"onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </>
  )
}
