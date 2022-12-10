import style  from 'styled-components'

import space from '../../../assests/images/space.jpg'


export  const Skill=style.div`
width: 100vw;
height: 60vh;
display: flex;
justify-content: center;
background-image:url(${space});
background-position: 0 100% ;
background-size: cover;
background-repeat: no-repeat;
   
   .MainSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    height: 90%;
    transform:translateY(-5.5vh);
    background-color:black;
    border-radius:25px;

    #left,#right{
        font-size:clamp(1.2rem,3vw,2.2rem);
        color:#B8B8B8;
    }
    #left:hover,#right:hover{
      color: white;
  }
    #left{
        position:absolute;
        top:50%;
        left:.8%;
    }
    #right{
        position:absolute;
        top:50%;
        right:.8%;
    }

    & >span:first-child{
        font-size: clamp(20px,5vw,45px);
        font-weight: 700;
        color:white;
    }

    #des{
        width:90%;
        display: grid;
        grid-template-columns: 1fr  2fr;
        gap:clamp(10px,2vw,30px);
        margin-bottom:10px;
        background:linear-gradient(90.21deg, rgb(8, 12, 19) 2.91%, rgba(170, 54, 124, 0.68) 221.58%);
        border-radius:20px;
         
        & >div:first-child{
            width:100%;
            height:clamp(80px,40vh,240px);
            display: flex;
            flex-direction: column;
            align-items: center; 
            justify-content:space-evenly; 
            
            span{
                font-size: clamp(12px,2.4vw,25px);
                font-weight: 700;
                color:#B8B8B8;
                text-align:center;
            }

            #prograssBar{
               width:clamp(80px,12vw,250px);
               aspect-ratio:1/1;
                
               .CircularProgressbar-path {
                stroke:rgb(129 98 117);
                
               }
               .CircularProgressbar-trail {
                stroke: transparent;
              }
              .CircularProgressbar-text {
                fill:#B8B8B8 ;
              }
            }
         }
         #parag{
            display: flex;
            justify-content:center;
            align-items: center; 
            width:100%;
            height:clamp(80px,40vh,240px);

          p{ 
            padding-right:clamp(.5rem,2.1vw,2rem);
            color: #B8B8B8;
            font-size: clamp(12px,2.4vw,22px);
            letter-spacing: 0.8px;
            line-height: 1.5em;
            font-weight:600;
         }
      }
    }
   }
 }
`