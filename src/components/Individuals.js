import React from 'react'

export const Individuals = ({image}) => {
  return (
    <div>
        <img src={image.urls.full} alt='unsplash image' />
    </div>
  )
}

export default Individuals;
