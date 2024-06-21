import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null)

  const data = [{
    desc: "This is the background color of the card that will be displayed",
    filesize: ".9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
  },
  {
    desc: "This is the background color of the card that will be displayed",
    filesize: ".9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
  },
  {
    desc: "This is the background color of the card that will be displayed",
    filesize: ".9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
  }];  

  return (
    <>
    <div ref = {ref}className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Card data={item} reference={ref} />
        ))}
        
        
    </div>
    </>
  )
}

export default Foreground
