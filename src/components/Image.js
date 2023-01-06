import React from "react";
import Individuals from './Individuals'

export const Image = ({images}) => {
    // console.log(images)
    return images.map((image) => (
        <Individuals key={image.id} image={image} />
    ))
}

export default Image;