import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../MusicTools/images/logo.jpg'
import { MdArrowDropDown } from 'react-icons/md'
import { FaTimes } from 'react-icons/fa'
import { IoMdArrowDropright } from 'react-icons/io'

function Nav() {
  const [display, setdisplay] = useState(false)

  return (
    <header>
      <div className="head">
        <img src={logo} alt="logo" />
        <h1>D'Paramount</h1>
      </div>

      <ul className={display ? 'nav-show' : 'nav-links'}>
        <NavLink
          className="link"
          exact
          to="/"
          activeStyle={{
            color: 'rgb(93, 151, 7)',
          }}
        >
          <li onClick={() => setdisplay(false)}>Home</li>
        </NavLink>
        <NavLink
          className="link"
          to="/about"
          activeStyle={{
            color: 'rgb(93, 151, 7)',
          }}
        >
          <li onClick={() => setdisplay(false)}>About</li>
        </NavLink>
        <NavLink
          className="link"
          to="/teams"
          activeStyle={{
            color: 'rgb(93, 151, 7)',
          }}
        >
          <li onClick={() => setdisplay(false)}>Teams</li>
        </NavLink>
        <div className="link">
          <li style={{ marginLeft: '1rem' }}>
            portfolio{' '}
            <span>
              {display ? <IoMdArrowDropright /> : <MdArrowDropDown />}
            </span>
            <ul className="sub-nav">
              <NavLink
                to="/tracks"
                className="link"
                activeStyle={{
                  color: 'rgb(93, 151, 7)',
                }}
              >
                <li onClick={() => setdisplay(false)}>Tracks</li>
              </NavLink>
              <NavLink
                to="/testimonies"
                className="link"
                activeStyle={{
                  color: 'rgb(93, 151, 7)',
                }}
              >
                <li onClick={() => setdisplay(false)}>Testimonies</li>
              </NavLink>
            </ul>
          </li>
        </div>
        <NavLink
          className="link"
          to="/contacts"
          activeStyle={{
            color: 'rgb(93, 151, 7)',
          }}
        >
          <li onClick={() => setdisplay(false)}>Contacts</li>
        </NavLink>
      </ul>
      <div className="bar" onClick={() => setdisplay(!display)}>
        {display ? <FaTimes /> : <FaBars className="bar-data" />}
      </div>
    </header>
  )
}

export default Nav
