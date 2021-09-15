import React from 'react';

function About() {
    var greeting = null;    
    var color = '';
    if (localStorage.getItem('name')) {
        greeting = 'Hej ' + localStorage.getItem("name") + '!';
    }
    if (localStorage.getItem('color')) {
        color = localStorage.getItem("color");
    }

    return (
        <section id="About" className={color}>
            <div className="wrapper">
                <h2>Om oss</h2>
                <p>{greeting} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>            
        </section>
    )
}

export default About;
