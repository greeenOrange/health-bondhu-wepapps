import React from 'react';
import CountUp from 'react-countup';
import './Experiance.css'

const Experiance = () => {
    return (
        <div className='experiance-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="experiance-details">
                        <h6 className='secondary'><CountUp end={15} />+ years Experiance</h6>
                        <h3 className='text-bold'>We Are Always ensure Best Medical Treatment For Your Health</h3>
                        <p className='paragraph'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="experiance-images">
                    <div class="outer_circle">
                        <div class="inner_circle">
                        <div className="inner-img">
                        <img src="https://i.ibb.co/T8TD32B/pose-4.png" alt="pose-4" />
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
                </div>
            </div>
        </div>
    );
};

export default Experiance;