import React from 'react';
import Ref1 from "../assets/ref1.jpg";
import Ref2 from "../assets/ref2.jpg";

function References() {
    return (
        <section id="References">
            <div className="wrapper">
                <h2>Referenser</h2>
                <div className="row">
                    <div class="item">
                        <img src={Ref1} alt="Referensbild 1"/>
                        <div class="wrap">
                            <h3>Referens 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>                    
                    </div>
                    <div class="item">
                        <img src={Ref2} alt="Referensbild 2"/>
                        <div class="wrap">
                            <h3>Referens 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default References;
