import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import {BrowserRouter} from 'react-router-dom'



 function Reuse(){
     return (
      <BrowserRouter>
          <App/>   
      </BrowserRouter>     
    )
 }
ReactDOM.render(<Reuse />,document.getElementById("root"))

