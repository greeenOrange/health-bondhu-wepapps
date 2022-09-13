import React from 'react';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className='review-section my-5'>
            <p>Testimonial</p>
            <h3>What thay say?</h3>
           <div className="container">

                    <div className="review-card">
                    <div className="review-sliders">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner slider-content">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/fHVcW8R/pose-8.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/fFzmyXP/pose-2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/fHVcW8R/pose-8.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    </div>
            </div> 
        </div>
    );
};

export default Testimonial;