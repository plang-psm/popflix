import React from 'react'
import { useState } from 'react'

function ReadMore({children}) {


    // Read more = true.
    const [readState, setReadState] = useState(false);

    const handleToggle = () => {
        setReadState(prevState => !prevState)
    }
  return (
    <div className='read-more'>
      {readState ? children : children.substr(0,150)}
      <button onClick={handleToggle}>{readState ? 'Read Less' : 'Read More..'}</button>
    </div>
  )
}

export default ReadMore
