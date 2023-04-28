import React from 'react'

const Test = () => {
    const data = `
    <h1>Hello</h1>
    <p>Code</p>
    ` ;
  return (
    <div dangerouslySetInnerHTML={{__html : data}}>

    </div>
  )
}

export default Test
