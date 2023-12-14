import React from 'react'

function ChangeLineParse(props:{text:string}) {
    const returnDom = props.text.split("\n").map((i,index)=>{
        return <React.Fragment key={index}>
            {i}
            <br/>
        </React.Fragment>
    })
  return (
    <>{returnDom}</>
  )
}

export default ChangeLineParse