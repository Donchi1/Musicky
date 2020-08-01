import React, { useState, useEffect, useCallback, useRef } from 'react'

import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import Zoom from 'react-reveal/Zoom'
import Carosel from './Carosel'
import audix from '../MusicTools/Governor/track/tugba/audio1.mp3'
import img from '../MusicTools/Governor/picture/normal.jpg'
import article from '../MusicTools/images/welcome1.jpg'
import { Link } from 'react-router-dom'
import Instruments from './Instruments'
import RecentTracks from './RecentTracks'
import Footer from './Footer'
import ReactPlayer from 'react-player'
import Loading from './Loading'

function Home() {
  let [count, setcount] = useState(0)
  const [isloading, setisloading] = useState(true)

  let countRef = useRef(count)
  const counter = useCallback(() => {
    if (count === 2) {
      return setcount((countRef.current = 0))
    }
    setcount((prev) => prev + 1)
  }, [count])

  useEffect(() => {
    setisloading(false)
    setTimeout(counter, 8000)
    return () => {
      clearTimeout(counter, 8000)
    }
  }, [counter])

  if (isloading) {
    return <Loading />
  } else {
    return (
      <Zoom>
        <div className="home-container">
          <section>
            {count === 0 && (
              <Carosel
                slide="carosel"
                title="music life shows"
                text="our best will make you inspired."
              />
            )}
            {count === 1 && (
              <Carosel
                slide="carosel1"
                title="music is life"
                text="we make music part of us"
              />
            )}

            {count === 2 && (
              <Carosel
                slide="carosel2"
                title="Satisfaction our Priority"
                text="adding more joy to life through the harmony in music"
              />
            )}
          </section>

          <section className="music-player">
            <Fade top>
              <div>
                <h2>recent track</h2>
                <img src={img} alt="audio" />
                <audio className="player" src={audix} controls>
                  <p>
                    Your browser doesn't support HTML5 audio. Here is a{' '}
                    <a href="../MusicTools/Governor/track/tugba/audio1.mp3">
                      link to download the audio
                    </a>{' '}
                    instead.
                  </p>
                </audio>
              </div>
            </Fade>
          </section>
          <article className="home-article">
            <Fade top>
              <img src={article} alt="wellcome" />
            </Fade>
            <div className="home-article-header">
              <Rotate bottom left>
                <h2> Welcome to D'Paramounts!</h2>
                <p>
                  D'Paramount Music crew offers a standard service through our
                  intense focus on music Our music educators are highly
                  qualified and share a love of teaching which makes us grow
                  everyday on our musical life.
                </p>
              </Rotate>
              <Link to="/about">
                <button>Read More</button>
              </Link>
            </div>
          </article>
          <Instruments />
          <RecentTracks />
          <section className="life-show">
            <h1>Latest life shows</h1>
            <ReactPlayer
              url="https://youtu.be/arEz2v3hDHg"
              controls
              className="V-player"
              config={{
                file: {
                  tracks: [
                    {
                      kind: 'subtitles',
                      src: 'subs/subtitles.en.vtt',
                      srcLang: 'en',
                      default: true,
                    },
                    {
                      kind: 'subtitles',
                      src: 'subs/subtitles.ja.vtt',
                      srcLang: 'ja',
                    },
                    {
                      kind: 'subtitles',
                      src: 'subs/subtitles.de.vtt',
                      srcLang: 'de',
                    },
                  ],
                },
              }}
            />
          </section>

          <Footer />
        </div>
      </Zoom>
    )
  }
}

export default Home
