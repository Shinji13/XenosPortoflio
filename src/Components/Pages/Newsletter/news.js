import React, { useState,useEffect } from 'react'
import { NewsLetter } from './newsStyle'
import Facebook  from '../../../assests/images/facebook.svg'
import Twitter  from '../../../assests/images/twitter.svg'
import LinkedIn  from '../../../assests/images/linkedin.svg'
import {animateScroll} from 'react-scroll'
export default function News({onValidated, status, message}) {
    const [email,SetEmail]=useState('');
    useEffect(()=>{
        if (status==='success') SetEmail('')
        
    },[status])
    const HandleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
    }
    return (
    <NewsLetter>
        <div id='NewsSection'>
            <div><span>Subscribe to our Newsletter and Get our latest Content </span></div>
            <form onSubmit={HandleSubmit}>
                <div>
                   <input type='email' required placeholder='Email Address' value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                   <input type="submit" id='submit' />
                </div>
            </form>
        </div>
      <div id="footer">
          <div id='Logo'>
              <i className="fa-brands fa-joomla" onClick={()=>{animateScroll.scrollToTop()}}></i>  
              <span>XENOS</span>
          </div>
          <div id='Media'>
              <div>
                <a href='d'><img src={Facebook} alt='facbook'/></a> 
                <a href='d'><img src={Twitter} alt='twitter'/></a>
                <a href='d'>  <img src={LinkedIn} alt='LinkedIn'/></a>
                </div>
              <span>Fellow me In Sociel Media</span>  
        </div>
      </div>
    </NewsLetter>
  )
}
