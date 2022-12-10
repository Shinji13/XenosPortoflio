import React, { useEffect } from 'react'
import Facebook  from '../../assests/images/facebook.svg'
import Twitter  from '../../assests/images/twitter.svg'
import LinkedIn  from '../../assests/images/linkedin.svg'
import { Link ,animateScroll} from 'react-scroll'
import { MainNav } from './Nav_bar_style'
export default function Navbar() {
    const [ScrollColor,SetColor]=React.useState(false)
    useEffect(()=>{
       let Onscroll=()=>{
           if(window.scrollY>80){
               SetColor(true);
           }
           else{
               SetColor(false);
           }
       }
       window.addEventListener("scroll",Onscroll);
       return ()=>{
            window.removeEventListener("scroll",Onscroll);
       }
    },[])

  return (
      <MainNav NavColor={ScrollColor}>
          <div id='Logo'>
              <i className="fa-brands fa-joomla" onClick={()=>{animateScroll.scrollToTop()}}></i>  
              <span>XENOS</span>
          </div>
          <div id='searchBar'>
              <div id='Links'>
                <Link  className='link' to='home' smooth={true} duration={500}>Home</Link>
                <Link  className='link'to='skill' smooth={true} duration={500}>Skills</Link>
                <Link className='link' to='news' smooth={true} duration={500}>NewsLetter</Link>
              </div>
              <div id='contactNav'>
                 <div id='Media'>
                    <a href='d'><img src={Facebook} alt='facbook'/></a> 
                    <a href='d'><img src={Twitter} alt='twitter'/></a>
                    <a href='d'><img src={LinkedIn} alt='LinkedIn'/></a>
                 </div>
                 <button><Link  to='contact' smooth={true} duration={500}>Lets connect</Link></button>
              </div>
          </div>
      </MainNav>
  )
}
