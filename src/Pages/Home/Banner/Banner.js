import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-section py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-details">
                        <h3> <span className='banner-heading'>Your <span className='primary'>Health</span> is Our</span> Top <span className='secondary'>Priority</span></h3>
                        <p className='paragraph'>There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                        <button className='my-2'>Meet Our Specialist</button>
                        </div>
                        <div className="countup my-4 row">
                        <div className="count1 col-md-4">
                        <h4 className='secondary'><CountUp end={262} />k+
                        </h4>
                        <h6 className='paragraph'>Recovered Patients</h6>
                        </div>

                        <div className="count2 col-md-4">
                        <h4 className='secondary'><CountUp end={96} />%
                        </h4>
                        <h6 className='paragraph'>Satisfaction Rate</h6>
                        </div>

                        <div className="count3 col-md-4">
                        <h4 className='secondary'><CountUp end={86} />+
                        </h4>
                        <h6 className='paragraph'>Expert Doctors</h6>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div class="outer_circle">
                        <div class="inner_circle">
                        <div className="inner-img">
                        <img src="https://i.ibb.co/fFzmyXP/pose-2.png" alt="pose-2" />
                        </div>
                        </div>
                        <button> <FontAwesomeIcon icon={faCircleCheck} /> Regular checkup</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;