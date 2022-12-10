import Style from 'styled-components'
const MainNav=Style.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 80px;
 width: 100vw;
 background-color: ${(props)=>props.NavColor ? "#121212":"transparent"};
 overflow: hidden;
 position:fixed;
 top:0;
 left:0;
 z-index:99;

  
  #Logo{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: clamp(1.8rem,2vw,3rem);
    font-family:serif;
    font-weight: 400;
    margin-left:clamp(1.5rem,10%,6rem);
    letter-spacing:.8px;
    color:#959599;
    & >span{
      margin-left:10px;
    }
  }
  #searchBar{
    margin-right:clamp(1.5rem,10%,6rem);
    display: flex;
    align-items: center;
    #Links{
        display: flex;
        align-items: center;
        margin-right:clamp(1rem,1.8vw,2rem);
        & >.link{
            margin-inline-start:clamp(1.2rem,2vw,2.2rem);
            text-decoration: none;
            font-size: clamp(.8rem,2vw,1rem);
            font-weight: 100;
            font-family: serif;
            color:#a39291;
            transition:100ms 0s ease;
            cursor:pointer;
            &:hover{
              color:white;
          }
        }
        & > .active{
          color:white;
        }
    }
    #contactNav{
        display: flex;
        align-items: center; 
         #Media{
            margin-right:clamp(.7rem,1.4vw,1rem);
            & >a{
                text-decoration: none;
                img{      
                  filter: invert(70%) sepia(95%) saturate(21%) hue-rotate(2deg) brightness(92%) contrast(108%);
                  width:clamp(1.58rem,2.6vw,2.5rem);
                  aspect-ratio:1//1;                  
                }  
                img:hover{                    
                  filter: invert(28%) sepia(25%) saturate(1954%) hue-rotate(276deg) brightness(89%) contrast(84%);                   
                }    

            }            
        }
        & > button{
            width:7rem;
            height:2.8rem;
            display: flex;
            align-items: center; 
            letter-spacing:.5px;
            justify-content:center;
            position: relative;
            font-size:.9rem;
            font-weight:bold;
            font-family:math;
            color:white;
            padding-inline:.2rem;
            padding-block:.4rem;
            background-color:transparent;
            border:.5px solid white;
            border-raduis:5px; 
            cursor:pointer;
            
            &::before{
              content:"";
              display:inline-block;
              width:0;
              height:100%;
              position:absolute;
              left:0;
              top:0;
              transition:all 300ms 0s ease;
              background-color:#fff;
              z-index:-1;
            }
            &:hover{
              color: #121212;
            }
            &:hover::before{
              width:100%;
            }
        }
    }
  }


  @media  (max-width:500px) {
    justify-content:center;
    .toggle_bar{
        display:inline-block;
    }
    .web_name{
      font-size:3rem;
      padding: 0;
    }
   .nav_bar{
      position: fixed;
      background-color:${({Bg})=>Bg};
      top:80px;
      left:${({Media})=>(Media)? 0 : "-200%"}; 
      height: 100vh;
      width: 100%;
      transition:300ms 0s ease;
   }
    .nav_bar>ul{
      flex-direction: column;   
      justify-content: flex-start;   
      align-items: center;
      height: 100%;
      margin-top:2rem;
   }
   .nav_bar>ul>li{
      width: 100%;
      height: 20%;
      text-align: center;
    }
    .nav_bar>ul>li > .Link{
        font-size:1.6rem;
     }
  }
 ` 
 export {MainNav}