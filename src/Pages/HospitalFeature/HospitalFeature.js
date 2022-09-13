import React from 'react';
import './HospitalFeature.css'

const HospitalFeature = () => {
    return (
        <div className='hospital-feature py-5'>
            <div className="container">
                <div className="row">
                <div className="col-md-5">
                    <div className="experiance-images">
                    <div class="outer_circle">
                        <div class="inner_circle">
                        <div className="inner-img">
                        <img src="https://i.ibb.co/PQ114FZ/pose-7.png" alt="pose-7" />
                            <div className="pose-flor"></div>
                        </div>
                        </div>
                    </div>
                    <>
                    <div className="blood-pressure experiance_icons">
                    <img src="https://i.ibb.co/6Hc0GYN/Blood-Pressure.png" alt="Blood-Pressure" border="0"/>
                    </div>
                    <div className="First-Aid_icon experiance_icons">
                    <img src="https://i.ibb.co/KDR6GkZ/First-Aid.png" alt="First-Aid" border="0"/>
                    </div>
                    <div className="Plastrer_icon experiance_icons">
                    <img src="https://i.ibb.co/hfGnBtK/Plastrer.png" alt="Plastrer" border="0"/>
                    </div>
                    </>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="hospital-feature-wrapper">
                    <div className="hospital-feature-details">
                    <h6 className='secondary'>Our Hospital Feature</h6>
                    <h3 className='text-bold'>Make An Appointment Easy And Fast Services </h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-heading">
                                <h5>24 Hours Doctor Support</h5>
                                <img src="https://i.ibb.co/cw0J0W3/appointment.png" alt="appointment" />
                                </div>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-heading">
                                <h5>Exclusive Supports</h5>
                                <img src="https://i.ibb.co/DY8Qyrr/clock.png" alt="clock" />
                                </div>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-heading">
                                <h5>Friendly Environment</h5>
                                <img src="https://i.ibb.co/Kz304gM/enviroment.png" alt="enviroment" />
                                </div>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-heading">
                                <h5>24 Hours Nurse Support</h5>
                                <img src="https://i.ibb.co/7JZMpsK/exclusive.png" alt="exclusive" />
                                </div>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalFeature;