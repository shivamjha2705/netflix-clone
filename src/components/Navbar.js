import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {

    const[show , handleShow] = useState(false);
    useEffect(()=>{
       window.addEventListener("scroll", ()=>{
        if (window.scrollY > 50) {
            handleShow(true);
        } else {
            handleShow(false);
        }
       });
    }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
        <img className='navbar_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158' alt='Netflix Logo'/>
        <img className='navbar_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='avatar logo'
        />
    </div>
  )
}

export default Navbar