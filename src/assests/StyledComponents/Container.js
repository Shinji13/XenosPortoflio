import style from 'styled-components'

const Container=style.div`
display:flex;
flex-direction:${({direction})=>direction};
justify-content: center;
align-items: center;
margin-bottom:${({margin})=>margin}
transform: translateY(${({translate})=>translate});
background-color: ${({color})=>color};
width:100vw;
height:100vh;
  @media (max-width:500px){
      flex-direction:column;
      height:100vh;
      margin-top:${({top})=>top ? "6%" : 0};
  }
} 
`
export default Container;