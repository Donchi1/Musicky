import React, { useEffect, useState } from 'react'
import Carosel from './Carosel'
import Footer from './Footer'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import testimonypic1 from '../MusicTools/images/testimony.jpg'
import testimonypic2 from '../MusicTools/images/testimony1.jpg'
import testimonypic3 from '../MusicTools/images/testimony2.jpg'
import testimonypic4 from '../MusicTools/images/testimony.jpg'
import testimonypic5 from '../MusicTools/images/testimony1.jpg'
import testimonypic6 from '../MusicTools/images/testimony2.jpg'

import Loading from './Loading'

function Testimony() {
  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    setisloading(false)
  }, [])

  if (isloading) {
    return <Loading />
  } else {
    return (
      <div>
        <Zoom>
          <Carosel title="Testimonies" slide="tracks" />
        </Zoom>
        <section className="testimonies">
          <div className="testimonies-data">
            <Fade top>
              <div>
                <img src={testimonypic1} alt="testitonies" />
                <h2>lucas Finan</h2>
                <p>
                  professional trumpeters to make you feel happy ready to teach
                  all new members Jazz’s has an entire page dedicated to why
                  customers have chosen them. It’s clean and simple, featuring
                  customers reviews in a “spotlight” format. This section is
                  showcased as a dark area and it has enough space to cover
                  hundreds and thousands of reviews.
                </p>
              </div>

              <div>
                <img src={testimonypic2} alt="testitonies" />
                <h2>Elvis jeo</h2>
                <p>
                  Guiter is one the instrument that makes us so special. we are
                  ever ready to teach all new members Jazz’s has an entire page
                  dedicated to why customers have chosen them. It’s clean and
                  simple, featuring customers reviews in a “spotlight” format.
                  This section is showcased as a dark area and it has enough
                  space to cover and thousands of reviews.
                </p>
              </div>
              <div>
                <img src={testimonypic3} alt="testitonies" />
                <h2>Clerk lords</h2>
                <p>
                  {' '}
                  greatly skilled melodious pionist always there to inpact
                  through to lifes through music Jazz’s has an entire page
                  dedicated to why customers have chosen them. It’s clean and
                  simple, featuring customers reviews in a “spotlight” format.
                  This section is showcased as a dark area and it has enough
                  space to cover hundreds and thousands of reviews.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div>
                <img src={testimonypic4} alt="testitonies" />
                <h2>mike jude</h2>
                <p>
                  {' '}
                  great skilled drummer to make you feel melodius always there
                  to inpact in lifes with his skills Jazz’s has an entire page
                  dedicated to why customers have chosen them. It’s clean and
                  simple, featuring customers reviews in a “spotlight” format.
                  This section is showcased as a dark area and it has enough
                  space to cover hundreds and thousands of reviews.
                </p>
              </div>
              <div>
                <img src={testimonypic5} alt="testitonies" />
                <h2>Clerk jude</h2>
                <p>
                  <b>Governor General</b> a great and talented melodious singer
                  (The Founder of D'paramount crew) Jazz’s has an entire page
                  dedicated to why customers have chosen them. It’s clean and
                  simple, featuring customers reviews in a “spotlight” format.
                  This section is showcased as a dark area and it has enough
                  space to cover hundreds and thousands of reviews.
                </p>
              </div>
              <div>
                <img src={testimonypic6} alt="testitonies" />
                <h2>Rohda Clem</h2>
                <p>
                  we never left our traditional <b>lara</b> behind which another
                  great instrument we use Jazz’s has an entire page dedicated to
                  why customers have chosen them. It’s clean and simple,
                  featuring customers reviews in a “spotlight” format. This
                  section is showcased as a dark area and it has enough space to
                  cover hundreds and thousands of reviews.
                </p>
              </div>
            </Fade>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Testimony
