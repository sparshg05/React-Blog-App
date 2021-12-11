import React from 'react';
import Header from './Header';
import './../styles/home.css';
import image from './../images/landscape.jpg';

const Home = (props)=>{
    console.log(props);
    return(
        <>
            <Header/>
            {props.data.map(item =>(
                <>
                    <div className="container mx-auto d-flex flex-column">

                        <div className="inner-container0">
                            <div className="first-child">
                                <h3>Title of vertial gallery</h3>
                                <p>Travel / Decemember 6,2021</p>
                            </div>
                            <div className="second-child">
                                <div className="second-child-upper">
                                    <h5>The Sound cloud</h5>
                                    <h5>You loved is doomed</h5>
                                    <p style={{fontSize:"12px"}}>Travel / Decemember 6,2021</p>
                                </div>
                                <div className="second-child-lower">
                                    <h5>The Sound cloud</h5>
                                    <h5>You loved is doomed</h5>
                                    <p style={{fontSize:"12px"}}>Travel / Decemember 6,2021</p>
                                </div>
                            </div>
                        </div>


                        <div className="inner-container1">

                            <h2>The Latest</h2>
                            <hr className="hr"/>
                            <div className="inner-lower-container d-flex flex-row">
                                <div class="card" style={{width: "10rem;" , marginRight: "40px"}}>
                                    <img src={image} class="card-img-top" alt="..." />
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.subheading}</h4>
                                        <p class="card-text">{item.brief}</p>
                                        <a href="/" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card" style={{width: "10rem;" , marginRight: "40px"}}>
                                    <img src={image} class="card-img-top" alt="..." />
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.subheading}</h4>
                                        <p class="card-text">{item.brief}</p>
                                        <a href="/" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card" style={{width: "10rem;" , marginRight: "40px"}}>
                                    <img src={image} class="card-img-top" alt="..." />
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.subheading}</h4>
                                        <p class="card-text">{item.brief}</p>
                                        <a href="/" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                
                            </div>

                        </div>


                        <div className="inner-container2">

                            <h2>Latest Articles</h2>
                            <hr className="hr"/>
                            <div className="inner-lower-container latest-articles mt-6">

                                <div class="latest_article_first_child">
                                    <div style={{height: '580px'}}>
                                        <div className="d-flex" style={{borderBottom: '1px solid lightgrey' , borderTop: '1px solid lightgrey'}}>
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

                                    <div className="img-div">
                                        <h2>Title of vertial gallery</h2>
                                        <p>Travel / Decemember 6,2021</p>
                                    </div>

                                </div>
                                <div className="latest_article_second_child">
                                    <div className="ad mb-3">Advertisment</div>
                                    
                                    <h2>The Posts</h2>
                                    <hr className="hr"/>

                                    <div class="card border-0" style={{width: "10rem;"}}>
                                        <img src={image} class="card-img-top" alt="..." style={{height: "55%"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">{item.heading}</h4>
                                            <p>Travel / Decemember 6,2021</p>
                                        </div>
                                    </div>
                                    <div className="d-flex" style={{borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey'}}>
                                        <img src={image} className="p-3" alt="..." style={{width:"39%"}}/>
                                        <div className="content p-3" style={{width:"50%"}} >
                                            <h6>{item.heading}</h6>
                                            <p style={{fontSize:"12px"}}><b>TECH </b>/TODAY AT 10:00</p>
                                        </div>
                                    </div>
                                    <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                        <img src={image} className="p-3" alt="..." style={{width:"39%"}}/>
                                        <div className="content p-3" style={{width:"50%"}} >
                                            <h6>{item.heading}</h6>
                                            <p style={{fontSize:"12px"}}><b>TECH </b>/TODAY AT 10:00</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img src={image} className="p-3" alt="..." style={{width:"39%"}}/>
                                        <div className="content p-3" style={{width:"50%"}} >
                                            <h6>{item.heading}</h6>
                                            <p style={{fontSize:"12px"}}><b>TECH </b>/TODAY AT 10:00</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="inner-container3">

                            <h2>Latest Stories</h2>
                            <hr className="hr"/>
                            <div className="inner-lower-container d-flex flex-row">

                                <div class="card" style={{width: "10rem;" , marginRight: "40px"}}>
                                    {/* <img src={image} class="card-img-top" alt="..." /> */}
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.heading}</h4>
                                        <p class="card-text">{item.bdescription}</p>
                                        <p className="pt-4"><b>TECH </b>/TODAY AT 10:00</p>
                                    </div>
                                </div>
                                <div class="card" style={{width: "10rem;" , marginRight: "40px"}}>
                                    {/* <img src={image} class="card-img-top" alt="..." /> */}
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.heading}</h4>
                                        <p class="card-text">{item.bdescription}</p>
                                        <p className="pt-4"><b>STYLE </b>/AUGUST 17 10:00</p>
                                    </div>
                                </div>
                                <div class="card" style={{width: "10rem;" , marginRight: "40px"}}>
                                    {/* <img src={image} class="card-img-top" alt="..." /> */}
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.heading}</h4>
                                        <p class="card-text">{item.bdescription}</p>
                                        <p className="pt-4"><b>TECH </b>/AUGUST 17 10:00</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* <span style={{marginTop: '100px', border: '1px solid red'}}>View More</span>
                             */}
                        </div>

                    </div>
                </>
            ))}
            


                {/* {props.data.map(item => (
                    <>
                        <h2>{item.heading}</h2>
                        <h3>{item.subheading}</h3>
                        <p>{item.bdescription}</p>
                    </>
                ))} */}

        </>
    )
}

export default Home;