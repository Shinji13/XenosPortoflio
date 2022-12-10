import React, {  useState } from 'react'
import { Skill } from './skillsStyle'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
  const [SlideIndex,ChangeSlideIndex]=useState(0);
  const Slides=[
    {percentage:85,describe:"I reach the peek of FrontEnd web development from learing html,css,js to ReactJs and it most commun libaries zustand,jotai,styled Components and react router ",title:"FrontEnd"},
    {percentage:55,describe:"Unlike web development IM not that expert  in design but im learing svgs and desgin tools like figma its should'nt be that hard to pick up",title:"Design"},
    {percentage:80,describe:"After taking so many cours and doing so much leetcoding i could say in confident that i have the techniques required to write optimized code",title:"Data structers and Algorithmes"},
    {percentage:30,describe:"I am in the road to develepe my backend skills i am decent in nodeJS but still a lot to learn ",title:"BackEnd"},
  ];

  return (

     <Skill perc={Slides[SlideIndex%Slides.length].percentage} npmid='skill' >
        <div  className='MainSection'>
         <span>Skills</span>
         <div id="des">
           <div>
            <div id='prograssBar'>
              <CircularProgressbar 
                 value={Slides[SlideIndex%Slides.length].percentage} 
                 text={`${Slides[SlideIndex%Slides.length].percentage}%`} 
                 strokeWidth="6" 
                 counterClockwise={true} 
                 className="Circle"
              />
             </div>
             <span>{Slides[SlideIndex%Slides.length].title}</span>
          </div>
            <div id="parag"><p>{Slides[SlideIndex%Slides.length].describe}</p></div>        
       </div>
          <i class="fa-solid fa-circle-arrow-right" id="right" onClick={()=>{ChangeSlideIndex(SlideIndex+1)}}></i>
          <i class="fa-solid fa-circle-arrow-left" id="left" onClick={()=>{ChangeSlideIndex((prev)=>{
             if(prev==0){
                return 2
             }
             else{
                return prev + 1
             }
          })}}></i>
       </div>
     </Skill>
 
  )
}
