import Image from 'next/image'
import React from 'react'
import interview from '/public/interview.jpg'

const ImagePage = () => {
  return (
    <div>
        <h1>Image Page</h1>

        <Image src={interview} alt="Interview" width={500} height={500} />
    </div>
  )
}

export default ImagePage