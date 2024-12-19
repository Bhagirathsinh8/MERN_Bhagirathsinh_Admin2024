import React from 'react'

export default function Home() {
  return (
    <>
    <main>
      <section className='section-hero container grid text-center mt-2'>
        <div className="row">
          <div className="col mt-5 w-full">
            <p>We are the world best it Company</p>
            <h1>Welcome to Bhagirathsinh Nakum</h1>
            <p>are you reay to take your business to the next level with cutting-edge 
              IT solution? Look no further! at Bhagirathsinh Nakum Mern Projecct and We 
              specialtize in providing innovation IT services and solution tailored to meet 
              your unique needs.
            </p>
            <div className="btn btn-group mb-5">
              <a href="/contact"><button className='border border-primary rounded p-1 m-2 bg-success bg-gradient text-white text-capitalize'>Connect Now</button></a>
              <a href="/service"><button className='border border-primary rounded p-1 m-2 bg-primary bg-gradient text-white text-capitalize'>service here</button></a>
            </div>
          </div>
            {/* hero image */}
            <div className="hero-image col ms-4 mb-5">
              <img src="/images/home.png" alt="coding together" width="400" height="400" />
            </div>
        </div>
        <div style={{height:"200px",width:"auto",backgroundColor: "#222831"}} className='border shadow border-black border-3 text-white'>
          <h2 className='p-3'>Current Project Details</h2>
          <div className="row text-capitalize fs-3 mt-2">
        <div className="col border-end border-black border-2">
          <h3>client</h3>
          <p className='fw-bold'>0</p>
        </div>
        <div className="col border-end border-black border-2">
          <h3>Order</h3>
          <p className='fw-bold fs-3'>1</p>
        </div>
        <div className="col border-end border-black border-2">
          <h3>Service</h3>
          <p className='fw-bold'>24/7</p>
        </div>
        <div className="col">
          <h3>Total Project</h3>
          <p className='fw-bold'>0</p>
        </div>
          </div>
        </div>


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
              <a href="/contact"><button className='border border-primary rounded p-1 m-2 bg-success bg-gradient text-white text-capitalize'>Connect Now</button></a>
              <a href="/service"><button className='border border-primary rounded p-1 m-2 bg-primary bg-gradient text-white text-capitalize'>service here</button></a>
            </div>
          </div>
        </div>


     </div>
      </section>
    </main>
    </>
  )
}
