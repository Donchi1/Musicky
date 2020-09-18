import React, { useState, useEffect, useRef } from 'react'
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import Fade from "react-reveal/Fade"
import Footer from './Footer'
import Carosel from './Carosel'
import {useGoogleMaps} from "react-hook-google-maps"
import { MdMessage, MdCall, MdLocationOn } from 'react-icons/md'
import Loading from './Loading'


function Contacts() {

    const [user, setuser] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
      
    })
    const[data, setdata] = useState({})
    const [isloading, setisloading] = useState(true)

    const dataRef = useRef(user)
  
    useEffect(() => {
      setisloading(false)
      setdata(dataRef)
     
      
    }, [data])

    const handleChange = (e) => {
       const{name, value} = e.target;
       setuser(() => { return {...user, [name]:value }})
    }
    const handleSubmit = (e) => {
       e.preventDefault()
       setdata(user)
       setuser({
       name: "",
       phone: "",
       email: "",
       message: ""
      })
      
    }
    const{name, email, phone, message} = user

    if(isloading){
      return <Loading />
    }else{
    
  return (
    <div>
      <Carosel title="Contacts" slide="contact-hero" />
      <section className="contact-container">
        <form onSubmit={handleSubmit}>
          <Zoom>

        <h1>Contact form</h1>
          </Zoom>
          <Fade top>

          <div>
          <label htmlFor="name">Names</label>
          <input
            type="text"
            value={name}
            required
            id="name"
            name="name"
            onChange={handleChange}
          />
        
          </div>
         

          <div>
         
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            required
            id="email"
            name="email"
            onChange={handleChange}
          />
         
          <label htmlFor="phone">phone</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
            title="format: 234-45-456-637"
            value={phone}
            required
            id="phone"
            name="phone"
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="message">Your message</label>
          <textarea
            minLength="1"
            maxLength="2000"
            value={message}
            required
            id="message"
            name="message"
            onChange={handleChange}
          ></textarea>
          </div>
            </Fade>
          <Flip right>
          <button type="submit" className="contact-btn">Send Message</button>

          </Flip>
          
        </form>
        <Fade right>
        <Map />

        </Fade>
      </section>
      <section className="location">
        <Zoom>
      
         <div>
          < MdMessage className="search-icon" />
           <p> governorgeneral1993@gmail.com</p>
         </div>

       
         <div>
          < MdCall  className="search-icon"/>
           <p>08166608925</p>
           <p>08166608925</p>
           <p>08148227973</p>
         </div>
       
         <div>
          < MdLocationOn  className="search-icon"/>
           <p>Ipokia Ogun state Nigeria</p>
         </div>
       
     </Zoom>
      </section>
      <Footer />
      
    </div>
  )
    }
  }


export default Contacts


const Map = React.memo(() => {
    const{ref, map, google} = useGoogleMaps(
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
       {
         center:{lat: 0, lng: 0},
         zoom: 3,
        },
        )
       console.log(google)
       console.log(map)
        return (
          <div className="map-container">
          <h1>Our location</h1>
        <div ref={ref} style={{ maxWidth: "100%",width: 400, height: 500 }} className="map" />
    </div>
    )
})
