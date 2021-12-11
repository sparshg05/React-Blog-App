import React from 'react';
import Header from './Header';
import './../styles/hollywood.css';
import image from './../images/landscape.jpg';

const Hollywood = (props)=>{
    return(
        <>
            <Header/>
            {props.data.map(item => (
                <>
                    <div className="container mx-auto mt-5">
                        <div className="inner-container-first">

                            <h2>Bollywood</h2>
                            <hr className="hr"/>

                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="inner-container-second">

                            <h2>The Posts</h2>
                            <hr className="hr"/>

                            <div class="card border-0" style={{width: "10rem;"}}>
                                <img src={image} class="card-img-top" alt="..." />
                                <div class="card-body p-4">
                                    <h4 class="card-title">{item.heading}</h4>
                                    <p>Travel / Decemember 6,2021</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey'}}>
                                <img src={image} className="p-2" alt="..." style={{width:"39%"}}/>
                                <div className="content p-2" style={{width:"50%"}} >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-2" alt="..." style={{width:"39%"}}/>
                                <div className="content p-2" style={{width:"50%"}} >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img src={image} className="p-2" alt="..." style={{width:"39%"}}/>
                                <div className="content p-2" style={{width:"50%"}} >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            ))}

        </>
    )
}

export default Hollywood;