import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/auth';


export default function Login() {
  
  const [user,setUser] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  
  const {storeTokenInLS} = useAuth();

  //handle input change event
  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user, [name]: value });
  };

  //handle the form submit
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('Login Form submitted', user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login",{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('Login Form',response);

      if(response.ok){
        const res_data = await response.json(); 
        // method 1 for local storeage to store token
        // use Context api to retrieve token
      //  localStorage.setItem('token', res_data.token);
      storeTokenInLS(res_data.token);
        alert('Login successful');
        setUser({email:'',password:''});
        navigate('/')
      }else{
        alert('Login Failed');
        console.log('Login Failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
   
  };
  return (
   < >
   <div  style={{ "backgroundColor": "#dbd8e3" }}>
   <section className="vh-full  py-4">
        <div className="container py-5 h-100 shadow mb-5 bg-body-tertiary rounded ">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid "
                alt="PhoneLogo"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label fw-bold" htmlFor="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    className="form-control form-control-lg"
                    placeholder="Enter Your Email Address"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label fw-bold" htmlFor="form1Example23">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    className="form-control form-control-lg "
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-md btn-block d-block d-lg-block"
                  
                >
                  Sign in
                </button>

                {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div> */}

                {/* <a data-mdb-ripple-init className="btn btn-primary btn-md me-3 btn-block" style={{"background-color": "#3b5998"}} href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a data-mdb-ripple-init className="btn btn-primary btn-md btn-block" style={{"background-color": "#55acee"}} href="#!"
            role="button">
            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}
              </form>
            </div>
          </div>
        </div>

      </section>
       </div>
   </>
  )
}
