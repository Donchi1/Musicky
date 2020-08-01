import React from 'react'
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import img from '../MusicTools/Governor/picture/audiopic.jpg'
import img1 from '../MusicTools/Governor/picture/audiopic1.jpg'
import img2 from '../MusicTools/Governor/picture/audiopic2.jpg'
import audix from '../MusicTools/Governor/track/tugba/audio1.mp3'
import audix1 from '../MusicTools/Governor/track/tugba/audio2.mp3'
import audix2 from '../MusicTools/Governor/track/tugba/audio3.mp3'
import { Link } from 'react-router-dom'

function RecentTracks() {
  return (
    <section className="recent-tracts-container">
      <Zoom>

      <h2 className="track-title">recent tracks</h2>
      <div className="line" ></div>
      </Zoom>
      <div className="recent-tracts-content">
        <Fade top>
        <img src={img1} alt="audio" />
        <div className="track-info">
          <h2>The General</h2>
          <h5>12/12/2019</h5>
          <audio className="player" src={audix1} controls>
            <p>
              Your browser doesn't support HTML5 audio. Here is a{' '}
              <a href="../MusicTools/Governor/track/tugba/audio1.mp3">
                link to download the audio
              </a>{' '}
              instead.
            </p>
          </audio>
          <Link to="/tracks">
            <button>View More</button>
          </Link>
        </div>
        </Fade>
      </div>

      <div className="recent-tracts-content">
        <Fade left>
        <img src={img2} alt="audio" />
        <div className="track-info">
          <h2>The General</h2>
          <h5>01/03/2020</h5>
          <audio className="player" src={audix} controls>
            <p>
              Your browser doesn't support HTML5 audio. Here is a{' '}
              <a href="../MusicTools/Governor/track/tugba/audio1.mp3">
                link to download the audio
              </a>{' '}
              instead.
            </p>
          </audio>
          <Link to="/tracks">
            <button>View More</button>
          </Link>
        </div>
      </Fade>
      </div>
      <div className="recent-tracts-content">
        <Fade bottom>
        <img src={img} alt="audio" />
        <div className="track-info">
          <h2>The General</h2>
          <h5>12/8/2019</h5>
          <audio className="player" src={audix2} controls>
            <p>
              Your browser doesn't support HTML5 audio. Here is a{' '}
              <a href="../MusicTools/Governor/track/tugba/audio1.mp3">
                link to download the audio
              </a>{' '}
              instead.
            </p>
          </audio>
          <Link to="/tracks">
            <button>View More</button>
          </Link>
        </div>
        </Fade>
      </div>
    </section>
  )
}

export default RecentTracks
