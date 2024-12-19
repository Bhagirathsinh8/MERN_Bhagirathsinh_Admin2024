import React from 'react'

export default function Service() {
  return (
    <div>
      <div class="container">		
		{/* <!-- row --> */}
		<div class="row mt-3 mb-5 cstm-height-card">
			<div class="col-md-4">
				<div class="card bg-dark text-white">
					<img src="/images/support.png"  height={300} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-danger">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-sm btn-success">Go somewhere</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
    </div>
  )
}
