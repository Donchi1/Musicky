import React, { useState, useEffect} from 'react'
import Zoom  from  "react-reveal/Zoom"
import {MdMessage,MdLocationOn, MdCall} from "react-icons/md"

import { FaFacebook, FaInstagram, FaYoutube, FaArrowUp, FaGooglePlusG } from 'react-icons/fa'




function Footer() {
 
 const [input, setinput] = useState("")
 const [getData, setgetData] = useState("")
    
    const handleSubmit = (e) => {
       e.preventDefault()
       setinput("")
    }
      
    const back = () => {
        if(window.scrollY > 100){
         document.querySelector(".back-to-top").style.display = "block"
        }else{
         document.querySelector(".back-to-top").style.display = "none"
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", back);

        return() => {
            window.removeEventListener("scroll", back)
        }
           
    }, [])
  

         
     
    return (

        <footer className="footer-container">
            <Zoom>
            <h2>{getData}</h2>
            <h1>Contact for RSVP</h1>
            <div className="line" ></div>
            <div className="footer">
            <div className="footer1">
              <h2>services</h2>
              <form onSubmit={handleSubmit}>
              <input type="email" name="email" value={input} placeholder="Enter your email"

              onChange={e => setinput(e.target.value)}
               />
              <button type="submit" onClick={()=> setgetData(input)}>subscribe</button>
              </form>
              <p>Let's enter into the land of music for transformation </p>
            </div>
               
             
            <div className="footer2">
            <h2>contact me</h2>
            <div className="section1">
                < MdMessage  className="footer-icons"/>
                <span>Email: governorgeneral1993@gmail.com</span>
            </div>
            <div className="section1">
                <MdCall  className="footer-icons"/>
                <span> Phone: 08166608925</span>
            </div>
            <div className="section1">
                < MdLocationOn className="footer-icons"/>
                <span>Lagos state Nigeria</span>
            </div>
            <a href="https://www.facebook.com/govgeneralcrew" target="_blank" rel="noopener noreferrer" className="link-icons"><FaFacebook /></a>
            <a href="https:www.governorgeneral1993@gmail.com" target="_blank" rel="noopener noreferrer" className="link-icons1"><FaGooglePlusG /></a>
            <a href="https://instagram.com/governor_general1?igshid=e6pk3a1lehc1" target="_blank" rel="noopener noreferrer" className="link-icons2" ><FaInstagram /> </a>
            <a href="https://www.youtube.com/channel/UCX0M4AoxSBGfD-ql2-MJ_CQ" target="_blank" rel="noopener noreferrer" className="link-icons3"><FaYoutube /></a>
            </div>
            </div>
            <span className="reserved">Copyright ©2020 All rights reserved</span>
            <span className="back-to-top" onClick={() => window.scrollTo({top:0, left:0, behavior: "smooth" })}><FaArrowUp /></span>
            </Zoom>
        </footer>
    )
}

export default Footer
