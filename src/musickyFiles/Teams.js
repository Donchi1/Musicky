import React, { useState, useEffect  } from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import Carosel from './Carosel'
import Footer from './Footer'
import General from '../MusicTools/Governor/picture/audiopic.jpg'
import Loading from './Loading'

function Teams() {



  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    setisloading(false)
  }, [])

  if (isloading) {
    return <Loading />
  } else {
    return (
      <>
        <Carosel slide="teams" title="our team" />
        <section className="our-team">
          <div>
            <Fade right>
              <img src={General} alt="General" />
              <h1>Governor General</h1>
            </Fade>
            <Rotate bottom right>
              <p>
                The founder of the paramount Crew. The young man gifted with
                music to affect lifes positively
              </p>
            </Rotate>
          </div>

          <div>
            <Zoom>
              <img src={General} alt="General" />
              <h1>donald kings</h1>
            </Zoom>
            <Rotate bottom Left>
              <p>
                A young man with a who with a great skill in playing drums with
                different amazing styles, with so many other instrumental
                skills.
              </p>
            </Rotate>
          </div>
          <div>
            <Fade left>
              <img src={General} alt="General" />
              <h1>Lucas gorge</h1>
            </Fade>
            <Rotate bottom right>
              <p>
                The man withgreat skills in playing of piano of different types,
                with so many other instrumental skills.
              </p>
            </Rotate>
          </div>
          <div>
            <Fade bottom left>
              <img src={General} alt="General" />
              <h1>leo Kelvin</h1>
            </Fade>
            <Rotate buttom top>
              <p>
                A young man with a great skill in playing guiter, with so many
                other instrumental skills.
              </p>
            </Rotate>
          </div>
          <div>
            <Fade top>
              <img src={General} alt="General" />
              <h1>john clem</h1>
            </Fade>
            <Rotate bottom left>
              <p>
                a young man talented with great skill in trumpet, with so many
                other instrumental skills.
              </p>
            </Rotate>
          </div>
          <div>
            <Zoom>
              <img src={General} alt="General" />
              <h1>Loise Jude</h1>
            </Zoom>
            <Rotate bottom right>
              <p>
                the great woman that plays lead like never seen before, with so
                many other instrumental skills.
              </p>
            </Rotate>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Teams
