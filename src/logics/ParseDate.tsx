import React from 'react'

function ParseDate(props:{data:String}) {
  const date = props.data.split("-")
  const year = date[0]
  const month = date[1]
  const day = date[2].split("T")[0]
  console.log(date)
  return (
    <>{year}/{month}/{day}</>
  )
}

export default ParseDate