import { faBriefcaseMedical, faClipboardCheck, faHeartPulse, faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='service-section my-5'>
            <p className='secondary'>Our Services</p>
            <h3 className='text-bold mb-3'>Services For Your Health</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-3">
                        <div className="card">
                        <span id='health-icon1'><h6>Cardiology</h6><FontAwesomeIcon icon={faHeartPulse} /></span>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <a href=""> Explore Now </a>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card">
                        <span id='health-icon2'><h6>Monthly Check Up</h6><FontAwesomeIcon icon={faClipboardCheck} /></span>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <a href=""> Explore Now </a>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card">
                        <span id='health-icon3'><h6>Opthalmology</h6><FontAwesomeIcon icon={faTooth} /></span>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <a href=""> Explore Now </a>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card">
                        <span id='health-icon4'><h6>Cardiology</h6><FontAwesomeIcon icon={faBriefcaseMedical} /></span>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <a href=""> Explore Now </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;