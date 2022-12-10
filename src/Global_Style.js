import { createGlobalStyle } from "styled-components";

const Globalstyles=createGlobalStyle`
   *,*::after,*::before{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      list-style: none;
   }
   html{
      overflow-x: hidden;
   }
   ::-webkit-scrollbar {
      width: 10px;
  }

  
  ::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 0px;
  }

  
  ::-webkit-scrollbar-thumb {
      background:#4a4845;
      width:100%;
      aspect-ratio:1/1;
  }

  
  ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(90.21deg,#AA367C -5.91%,#4A2FBD 111.58%);
`
export default Globalstyles;