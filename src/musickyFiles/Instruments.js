import React from 'react'
import Zoom from "react-reveal/Zoom"
import Rotate from "react-reveal/Rotate"
import Fade from "react-reveal/Fade"
import instrument from "../MusicTools/images/instrument.jpg"
import instrument1 from "../MusicTools/images/instrument1.jpg"
import instrument2 from "../MusicTools/images/instrument2.jpg"
import instrument3 from "../MusicTools/images/instrument3.jpg"
import instrument4 from "../MusicTools/images/instrument4.jpg"
import instrument5 from "../MusicTools/images/instrument5.jpg"

function Instruments() {
    return (
        
<section className="instruments">
    <Zoom>
    <h2>Our Tools</h2>
    <div className="line" ></div>
    </Zoom>
 <div className="instrument-tools">
     <Fade top>
    <div className="icons">
    <img src={instrument2} alt="instrument" />
    <Rotate top right>
        <p>professional trumpeters to make you feel happy ready to teach all new members </p>
        </Rotate>
    </div>
    <div className="icons">
    <img src={instrument5} alt="instrument" />
    <Rotate right>
        <p>Guiter is one the instrument that makes us so special. we are ever ready to teach all new members</p>
        </Rotate>
    </div>
    <div className="icons">
    <img src={instrument1} alt="instrument" />
    <Rotate Left>
        <p> greatly skilled melodious pionist always there to inpact through to lifes through music</p>
        </Rotate>
    </div>
    </Fade>
    <Fade bottom>
    <div className="icons">
    <img src={instrument3} alt="instrument" />
         <Rotate bottom right>
        <p> great skilled drummer to make you feel melodius always there to inpact in lifes with his skills </p>
        </Rotate>
    </div>
    <div className="icons">
    <img src={instrument4} alt="vocalist" />
        <p><b>Governor General</b> a great and talented melodious singer (The Founder of D'paramount crew) </p>
    </div>
    <div className="icons">
        
        <img src={instrument} alt="lara" />
        <Rotate bottom left>
        <p>we never left our traditional <b>lara</b> behind which another great instrument we use</p>
        </Rotate>
    </div>
    </Fade>
 </div>
</section>
    )
}

export default Instruments
