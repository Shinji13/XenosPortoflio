import style from 'styled-components'
import footer from '../../../assests/images/footer-bg.png'


// const Msg=keyframes`
//   0%{
//       transform: translateX(4vw);
//       font-size:0;
//   }     
//   90% {
//       transform: translateX(-2vw);
//       font-size:clamp(1rem,2vw,3rem);
//   }
//   100% {
//     transform: translateX(15vw);
//   }
// `

export const NewsLetter=style.div.attrs({id:"news"})`
width: 100vw;
height: 73vh;
display: flex;
justify-content: center;
background-image: url(${footer});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
position:relative;
 
  #footer{
      position: absolute;
      width:100%;
      left:0;
      bottom:10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline:5%;
       
      #Logo{
      display:flex;
      justify-content:center;
      align-items:center;
      font-size: clamp(1.5rem,2.4vw,3.5rem);
      font-family:serif;
      font-weight: 400;
      margin-left:clamp(1.5rem,10%,6rem);
      letter-spacing:.8px;
      color:#959599;
      & >span{
        margin-left:10px;
      }
    }

    #Media{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        div >a{
            text-decoration: none;
            img{      
              filter: invert(70%) sepia(95%) saturate(21%) hue-rotate(2deg) brightness(92%) contrast(108%);
              width:clamp(1.8rem,2.85vw,3rem);
              aspect-ratio:1//1;                  
            }  
            img:hover{                    
              filter: invert(28%) sepia(25%) saturate(1954%) hue-rotate(276deg) brightness(89%) contrast(84%);                   
            }    

        }
        span{
            font-size: clamp(1.5rem,2.4vw,3.5rem);
            font-family:serif;
            font-weight: 400;
            color:#959599;
        }            
    }
  }

 #NewsSection{
    display:grid;
    grid-template-columns:40% 60%;
    width: 70%;
    height: 57.53%;
    transform:translateY(-5.5vh);
    background-color:white;
    border-radius:20px;
    gap:clamp(10px,2vw,30px);

    & > div:first-child{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:6%;

        span{
            font-weight: 700;
            font-size:clamp(1.2rem,2.3vw,4rem);
            letter-spacing: 0.5px;
            line-height: 1.2em;
        }
    }
    & > form{
        width:100%;
        height:100%;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        padding-top:clamp(2rem,12vh,7rem);

        div{
          width:75%;
          height:3.8rem;
          position:relative;
          
          input:last-child{
             position:absolute;
             top:8%;
             right:1%;
             height:3.2rem;
             width:25%;
             border:3px solid #121212;
             border-radius: 18px;
             background-color:white;
             transition: 0.3s ease-in-out;
             color:#121212;
             font-weight: 700;
             font-size:clamp(10px,1.4vw,1.8rem);
          }

          input:first-child{
            width:100%;
            height:100%;
            color: #fff;
            font-weight: 500;
            font-size: clamp(6px,2.5vw,18px);
            letter-spacing: 0.8px;
            background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
            border:3px solid #121212;
            border-radius: 20px;
            padding: 0 15px;
            transition: 0.3s ease-in-out;

            &:focus::placeholder{
                color: #121212;
            }

            &:focus{
                background: rgba(255, 255, 255, 1);
                color: #121212;
                border: 3px solid #4A2FBD;
            }
            &:focus + #submit{
                background:linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
                color: #fff;
            }
            &::placeholder{
                font-size: 16px;
                font-weight: 400;
                color: #fff;
            }
          }
        }
    }
 }
  
`
/*#msg{
    display: flex;
    justify-content: center;
    align-items: center;
    width:fit-content;
    height:fit-content;
    padding-inline:.5rem;
    padding-block:.5rem;
    position:fixed;
    background-color:#121212;
    top:90px;
    right:2vw;
    color:#fff;
    font-weight: 700;
    font-size:clamp(1rem,2vw,3rem);
    letter-spacing: 0.5px;
    border:1px solid #121212;
    border-radius: 3px;
    -webkit-animation-name: ${Msg};
    animation-name: ${Msg};
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
 }*/