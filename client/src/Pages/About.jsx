import React from 'react'

function About() {
  return (
    <>
    <div className="about container grid text-center mt-5">
     <div className="row">
         
            {/* hero image */}
            <div className="hero-image col ms-4 mb-5">
              <img src="/images/info.png" alt="coding together" width="400" height="400" />
            </div>
            <div className="col mt-5 w-full">
            <p>We are the world best it Company</p>
            <h1>Info to Bhagirathsinh Nakum</h1>
            <p>are you reay to take your business to the next level with cutting-edge 
              IT solution? Look no further! at Bhagirathsinh Nakum Mern Projecct and We 
              specialtize in providing innovation IT services and solution tailored to meet 
              your unique needs.
            </p>
            <div className="btn btn-group mb-5">
              <a href="/contact"><button className='border border-primary rounded p-1 m-2 bg-primary bg-gradient text-white text-capitalize'>Contact US</button></a>
            </div>
          </div>
        </div>


     </div>
    
    
    </>
  )
}

export default About