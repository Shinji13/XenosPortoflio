import style ,{keyframes} from 'styled-components'
import space from '../../../assests/images/space.jpg'
const updown=keyframes`
  0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
`

export const HomePage=style.div.attrs({id:"home"})`
   width:100vw;
   height:114vh;
   display:grid;
   grid-template-columns:56% 44%;
   margin-top: 0;
   padding: clamp(120px,12vw,260px) 0 clamp(38px,7.5vw,100px) 0;
   background-image:url(${space});
   background-position: top center;
   background-size: cover;
   background-repeat: no-repeat;

   & > img{
    width:80%;
    aspect-ratio:1/1;
    animation: ${updown} 3s linear infinite;
   }
`

export const MainHome=style.div`
    display:flex;
    flex-direction:column;
    margin-left:8%;
    margin-right:5%;
    color:white;

    button:first-child{
        display:inline-block;
        letter-spacing:0.8px;
        font-size: clamp(8px,2.8vw,20px);
        font-family:serif;
        font-weight: 700;
        margin-bottom:16px;
        padding-inline:10px;
        padding-block:8px;
        background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        border:1px solid rgba(255,255,255,0.5);
    }
    #MainHeader{
        font-size: clamp(32px,5vw,65px);
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        margin-bottom: 20px;
        display: block;
        color:#bbb4db;
    }
    p{
        color: #B8B8B8;
        font-size: clamp(6px,2.5vw,18px);
        letter-spacing: 0.8px;
        line-height: 1.5rem;
        width: 96%;
    }
    button{
        color: #fff;
        font-weight: 400;
        background:linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        font-size: clamp(8px,2vw,18px);
        font-family:serif;
        padding:2px 10px 2px 10px;
        margin-top: 60px;
        letter-spacing: 0.8px;
        display: flex;
        align-items: center;
        border-radius:5px;
        border:1px solid rgba(255,255,255,0.5);

         &  .svg {
            font-size: clamp(14px,2.25vw,25px);
            margin-left: 10px;
            transition: 0.3s ease-in-out;
            line-height: 1;
            color:rgba(255,255,255,0.5);
          }
        &:hover .svg {
            margin-left: 25px;
            color:rgba(255,255,255,1);
          }
    }
    
`

