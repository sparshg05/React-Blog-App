import React from 'react';
import Header from './Header';

const Food = (props)=>{
    return(
        <>
            <Header/>
            <div className="container mx-auto">
                <div className="inner-container1 ">
                    <h2>The Latest</h2>
                    <div className="inner-lower-container d-flex flex-row justify-content-around mt-4">
                        <div class="card" style={{width: "18rem;"}}>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem;"}}>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem;"}}>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        
                    </div>
                </div>


                {props.data.map(item => (
                    <>
                        <h2>{item.heading}</h2>
                        <h3>{item.subheading}</h3>
                        <p>{item.bdescription}</p>
                    </>
                ))}

            </div>
        </>
    )
}

export default Food;