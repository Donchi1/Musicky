import React, { useState, useEffect } from 'react'
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

import Carosel from './Carosel'
import Footer from './Footer'
import music from '../MusicTools/Governor/track/tugba/audio.mp3'
import music1 from '../MusicTools/Governor/track/tugba/audio1.mp3'
import music2 from '../MusicTools/Governor/track/tugba/audio2.mp3'
import music3 from '../MusicTools/Governor/track/tugba/audio3.mp3'
import music4 from '../MusicTools/Governor/track/tugba/music.mp3'
import music5 from '../MusicTools/Governor/track/gosple/SUPREME-LEVEL-1.mp3'
import music6 from '../MusicTools/Governor/track/gosple/SUPREME-LEVEL-2.mp3'
import music7 from '../MusicTools/Governor/track/gosple/SUPREME-LEVEL-3.mp3'
import music8 from '../MusicTools/Governor/track/gosple/Supreme-Level-4.mp3'
import vidio1 from "../MusicTools/Governor/video/Subpost-8.mp4"
import Modal from "react-modal"
import img1 from '../MusicTools/images/about-pic.jpg'
import img2 from '../MusicTools/images/about-pic1.jpg'
import img3 from '../MusicTools/Governor/picture/normal.jpg'
import ReactPlayer from 'react-player'
import { FaTimes, FaPlay } from 'react-icons/fa'
import audiopic from "../MusicTools/Governor/picture/audiopic.jpg"
import Loading from './Loading'
Modal.setAppElement('#root')

function Tracks() {

    const [isopen, setisopen] = useState(false)
    const [isloading, setisloading] = useState(true)

    useEffect(() => {setisloading(false)},[])

    const defaultStyle = {
        overlay:{
            backgroundColor: "grey"
        },
        content: {
            position: "absolute",
            top: "15%",
            width: "45%",
            margin: "2rem auto",
           
          }

    }

    if(isloading){
      return <Loading />
    }else{

    
  return (
    <Zoom>
    <div>
      <Carosel slide="tracks" title="All Tracks" />
      <Fade top>
        <h1 className="track-head">Supreme Level vol1</h1>
        </Fade>
        <section className="music-tracks">
        <Fade bottom>
          
     
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme</h2>
          <p>10 January,2020</p>
          <audio src={music} controls />
          </div>
          <div>
          <button>Get Track</button>

        </div>
          </div>
        </Fade>
        <Fade left>
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme1</h2>
          <p>02 febuary,2019</p>
          <audio src={music1} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade right>
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
         <div>
          <h2>Supreme3</h2>
          <p>24 march,2020</p>
          <audio src={music3} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade top>
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme4</h2>
          <p>25 April,2019</p>
          <audio src={music4} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade bottom>
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme5</h2>
          <p>21 January,2020</p>
          <audio src={music5} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade left>
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme6</h2>
          <p>07 July,2019</p>
          <audio src={music6} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade right>
        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme7</h2>
          <p>02 November,2018</p>
          <audio src={music7} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade top>
        <div className="music-single">
          <div >
            <img src={img1} alt="audio" />
          </div>
          <div>
          <h2>Supreme8</h2>
          <p>06 May,2018</p>
          <audio src={music8} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>

        </Fade>
        <Fade bottom>

        <div className="music-single">
          <div>
            <img src={img1} alt="audio" />
          </div>
            <div>
          <h2>Supreme2</h2>
          <p>08 june 2019</p>
          <audio src={music2} controls />
          </div>
          <div>
          <button>Get Track</button>

          </div>
        </div>
        </Fade>
      </section>
      <section className="video-container">
          <div className="track-video">
           <Fade left>
          <img src={audiopic} alt="audiopic"/>
          <FaPlay className="play-icon" onClick={() => setisopen(true)}/>
          </Fade>
          <Zoom>
          <Modal isOpen={isopen} style={defaultStyle}>
            <FaTimes onClick={() => setisopen(false)} className="close-modal"/>
            <ReactPlayer url={vidio1} controls />

          </Modal>
          </Zoom>
          </div>
          <div className="track-video">
            <Fade bottom>
          <img src={img3} alt="audiopic"/>
          <FaPlay className="play-icon" onClick={() => setisopen(true)}/>

            </Fade>
            <Zoom>

          <Modal isOpen={isopen} style={defaultStyle}>
            <FaTimes onClick={() => setisopen(false)} className="close-modal"/>
            <ReactPlayer url={vidio1} controls />

          </Modal>
            </Zoom>
          </div>
          <div className="track-video">
            <Fade right>

          <img src={img2} alt="audiopic"/>
          <FaPlay className="play-icon" onClick={() => setisopen(true)}/>
            </Fade>
            <Zoom>

          <Modal isOpen={isopen} style={defaultStyle}>
            <FaTimes onClick={() => setisopen(false)} className="close-modal" />
            <ReactPlayer url={vidio1} controls />

          </Modal>
            </Zoom>
          </div>
      </section>
     

      <Footer />
     
    </div>
    </Zoom>
  )
}
}

export default Tracks
