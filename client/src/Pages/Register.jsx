import React, { useState } from 'react'
import {Link ,useNavigate} from "react-router-dom";
import { useAuth } from '../Store/auth';
export default function Register() {
  
  const [user,setUser] = useState({
    username :"",
    email:"",
    phone:"",
    work:"",
    password:""
  });
  
  const navigate = useNavigate();
  const {storeTokenInLS}= useAuth();

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,

    })

  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log('Register Form submitted:',user);
try {
 
  const response = await fetch("http://localhost:5000/api/auth/register",{
    method:'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  });
if(response.ok){
  const res_data = await response.json(); 
  console.log('Register Response:', res_data);
  // method 1 for local storeage to store token
  // localStorage.setItem('token', res_data.token);
  storeTokenInLS(res_data.token);
  setUser({
    username :"",
    email:"",
    phone:"",
    work:"",
    password:""
  });
  navigate("/login")
}
  // console.log(response);

} catch (error) {
  console.error('Register Error:', error);
}
  }  




  return (
    <>
    <section style={{ "backgroundColor": "#dbd8e3" }}>
      <div className="container h-full">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black shadow p-3 mb-5 bg-body-tertiary rounded mt-4" style={{ border: "none" }}>
              <div className="card-body p-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-5" onSubmit={handleSubmit} method='POST'>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}

                        <i className="zmdi zmdi-account zmdi-hc-2x  me-3"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            id="name"
                            name="username"
                            className="form-control"
                            placeholder="Your Name"
                            autoComplete='off'
                            required
                            value={user.username}
                            onChange={handleInput}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            autoComplete='off'
                            required
                            value={user.email}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-phone zmdi-hc-2x  me-3"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="form-control"
                            placeholder="Your Phone"
                            autoComplete='off'
                            required
                            value={user.phone}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-slideshow zmdi-hc-2x  me-3"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            id="work"
                            name="work"
                            className="form-control"
                            placeholder="Your Work"
                            autoComplete='off'
                            required
                            value={user.work}
                            onChange={handleInput}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Your Password"
                            autoComplete='off'
                            required
                            value={user.password}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mt-3 mb-lg-4 ">
                        <button
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-md fw-semibold"
                          
                        >
                          Register
                        </button>
                      </div>
                      <Link
                        to="/signin"
                        className="d-flex justify-content-center mx-4 mb-3 mt-3 mb-lg-4"
                      >
                        I am Already Register!!!
                      </Link>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-md-7 d-flex align-items-center order- order-lg-2 h-50%">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample logo"
                    />
                    {/* <img src={registerLogo} alt="" className="img-fluid" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
