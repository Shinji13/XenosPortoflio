import React from 'react'
export default function MainHeader() {
  let [counter,Inc]=React.useState(4)
  let clearTime=React.useRef({sentence:["Hi Im web develeper","Hi Im UX/UI DESINER"],toggle:true,index:0});
  React.useEffect(()=>{
        const id=setInterval(()=>{
            Inc((prev)=>{
                if(prev===4){            
                    clearTime.current.toggle=true;
                    (clearTime.current.index===0)? clearTime.current.index=1:clearTime.current.index=0;
                 } 
                if(prev===clearTime.current.sentence[clearTime.current.index].length){            
                   clearTime.current.toggle=false
                }       
                if(clearTime.current.toggle){
                  return prev+1;
                }
                else{
                  return prev-1;
                }
            })
        },700)
        return ()=>{
          clearInterval(id)
        }
  },[])
  return (
      <>
        <h1 id='MainHeader'>{clearTime.current.sentence[clearTime.current.index].slice(0,counter+1)} </h1>
      </>  
  )
}

