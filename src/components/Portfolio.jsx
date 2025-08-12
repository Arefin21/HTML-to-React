import react, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


class Portfolio extends Component{
    render(){
        return(
            <div>

                 <main>

       
        <div class="slider-area ">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap">
                                <h2>My Portfolio</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><a href="#">My Portfolio</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        

    </main>

            </div>
        )
    }
}
export default Portfolio