import React from 'react'
import { MainHome,HomePage } from './HomeStyle'
import Img from "../../../assests/images/header-img.svg"
import MainHeader from './child'
import {Link} from 'react-scroll'
export default function Home() {
  const age=new Date();
  return (
   <>
     <HomePage >
       <MainHome>
           <div id='description'>
              <button>Welcome to my Portfolio</button>
              <MainHeader/>
              <p id='Story'>My name is aymen keskas i am {age.getFullYear()-2002} year old web develeper that lives in algeria , i specialized in react for frontEnd and nodeJs for backend if you like my design subscribe to my newsletter for more  content</p>
              <button>
                 <Link  to='contact' smooth={true} duration={500}>Lets Connect</Link>
                 <i class="fa-solid fa-circle-arrow-right svg"></i>
               </button>
           </div>
        </MainHome>
        <img src={Img} alt="space"/>
     </HomePage>   
     </>   
  )
}
