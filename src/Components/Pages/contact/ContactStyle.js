import style from "styled-components"

export const ContactSection =style.div.attrs({id:"contact"})`
 width:100vw;
 height:120vh;
 display:flex;
 align-items:center;
 background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);

 img{
   display:inline-block;
   width:clamp(200px,58%,900px);
   height:clamp(300px,60%,900px);
   padding-left:1%;
   padding-right:2%;
 }

 #Contact_form{
   width:46%;
   display:grid;
   grid-template-columns:auto auto;
   gap:clamp(5px,.5vw,8px);
   padding-right:clamp(18px,5vw,60px);

    textarea{
      grid-column:span 2;
      height:30vh;
    }

    input{
      height:clamp(3.5rem,3vh,7rem);
    }

    input ,textarea{
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    color: #fff;
    margin: 0 0 8px 0;
    padding: 18px 26px;
    font-weight: 500;
    font-size: clamp(6px,2.5vw,18px);
    letter-spacing: 0.8px;
    transition: 0.3s ease-in-out;
    }

    input:focus,textarea:focus{
      background: rgba(255, 255, 255, 1);
      color: #121212;
    }
    input::placeholder,textarea::placeholder{
      font-size: 16px;
      font-weight: 400;
      color: #fff;
    }
    input:focus::placeholder,textarea:focus::placeholder{
      color: #121212;
      opacity: 0.8;
    }
    #send,#reset {
      font-weight: 700;
      color: #000;
      background-color: #fff;
      padding: 14px 48px;
      font-size: 18px;
      margin-top: 25px;
      border-radius: 0;
      position: relative;
      transition: 0.3s ease-in-out;

      &:hover{
        color:#fff;
        background-color:#121212;
      }
    }
  }
`