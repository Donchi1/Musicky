import React, { useState, useEffect, useRef } from 'react'
import Carosel from './Carosel'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import './MusickyCss/About.css'
import img from '../MusicTools/images/overview-img.jpg'
import founding from '../MusicTools/images/about-pic1.jpg'
import award from '../MusicTools/images/about-pic.jpg'
import founder from '../MusicTools/images/post-5.jpg'
import events from '../MusicTools/images/more.jpg'
import Footer from './Footer'
import { FaFacebookMessenger, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import Loading from './Loading'
Modal.setAppElement('#root')

function About() {
  const [isopen, setisopen] = useState(false)
  const [input, setinput] = useState('')
  const [message, setmessage] = useState('')
  const [isloading, setisloading] = useState(true)

  const inputRef = useRef(input)

  useEffect(() => {
    setisloading(false)
    setmessage(inputRef)
  }, [message])

  const handleChange = (e) => {
    setinput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setinput('')
  }

  const customStyles = {
    content: {
      minWidth: '30%',
      margin: '3rem auto',
      minHeight: '80vh',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'grey',
    },
  }
  if (isloading) {
    return <Loading />
  } else {
    return (
      <Zoom>
        <section className="about-container">
          <Carosel slide="about-hero" title="About Us" />

          <div className="overview-container">
            <div className="overview-text">
              <Zoom>
                <h2>Overview</h2>

                <h4>
                  The paramount crew is a team of young vibrant youths with great
                  passion for music, which has brought great changes to many lifes.
                </h4>
              </Zoom>
              <Rotate bottom right>
                <p>
                  {' '}
                  The leader and founder is Mr Onifade Moses Olajide AKA{' '}
                  <b>Governor General</b>. we Started as a small team of young
                  singers in our local church but today our skills through God
                  and love for music has taken us far making us one of the best
                  musicans in Ogun State, Lagos and many other states in
                  Nigeria. we go to places as we are invited for all kind of
                  musics, Life shows or Life performance. we are also ready to teach new member
                  that join our crew because we believe in expanssion and want
                  to really inpact in the life of many through music. you will
                  never regret getting in touch with us for the melody of our
                  song will surely make you happy and elevated.
                </p>
              </Rotate>
              <Flip>
                <div className="overview-button">
                  <button onClick={() => setisopen(true)}>Send Message</button>
                  <a href="https://www.facebook.com/govgeneralcrew">
                    <button className="btn-diff">
                      <FaFacebookMessenger
                        style={{ transform: 'translateY(0.2rem)' }}
                      />{' '}
                      Messanger{' '}
                    </button>
                  </a>
                </div>
              </Flip>
              <Zoom>
                <Modal isOpen={isopen} style={customStyles}>
                  <span onClick={() => setisopen(false)} className="modal-span">
                    <FaTimes />
                  </span>
                  <h2 className="modal-head">send us a message</h2>
                  <form onSubmit={handleSubmit} className="modal-input">
                    <textarea
                      autoFocus
                      placeholder="Message"
                      value={input}
                      required
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      onClick={() => alert('form submited')}
                    >
                      submit
                    </button>
                  </form>
                </Modal>
              </Zoom>
            </div>
            <Fade bottom>
              <div className="overview-img">
                <img src={img} alt="overview" />
              </div>
            </Fade>
          </div>

          <section className="history-container">
            <Fade top>
              <div className="history-content1">
                <div className="history-img">
                  <img src={founding} alt="history" />
                </div>
                <div className="history-info">
                  <h1>on "the date of birth of your crew"</h1>
                  <h2>
                    D'paramount crew was founded by mr Onifade Moses mostly
                    known as Governor General.{' '}
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="history-content1">
                <div className="history-img">
                  <img src={founder} alt="history" />
                </div>
                <div className="history-info">
                  <h1>December 13</h1>
                  <h2>
                    The Governor General was born. His consanguinous name is
                    Onifade Moses also know as OMO{' '}
                  </h2>
                  <Rotate bottom right>
                    <p>
                      {' '}
                      (Born December 13, Owode yewa Ogun-state Nigeria), Nigeria
                      well known musician governor general happens to be a gutsy
                      vanguard in creativity when it comes to gospel and juju
                      sectors in Nigeria music. Governor general crew is know as
                      (D'Paramount crew) and in conjunction with his name, it
                      sounds Governor general and D'Paramount crew.
                    </p>
                  </Rotate>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="history-content1">
                <div className="history-img">
                  <img src={award} alt="history" />
                </div>
                <div className="history-info">
                  <h1>Achievements</h1>
                  <h2>
                    {' '}
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit
                  </h2>
                  <Rotate bottom top>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehen
                    </p>
                  </Rotate>
                </div>
              </div>
            </Fade>
            <Fade buttom>
              <div className="history-content1">
                <div className="history-img">
                  <img src={events} alt="history" />
                </div>
                <div className="history-info">
                  <h1>more events and ideas</h1>
                  <h2>
                    {' '}
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehen
                  </h2>
                  <Rotate bottom left>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irur
                    </p>
                  </Rotate>
                </div>
              </div>
            </Fade>
          </section>

          <Footer />
        </section>
      </Zoom>
    )
  }
}

export default About
