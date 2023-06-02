import React from 'react'

function Gallery(props) {
    const images = props.images;
  return (
    <div className='gallery-container'>
        <div className='gallery-grid'>
            {images.map((imageUrl, index) => (
                <div className='board' key={index}>
                    <img src={imageUrl} alt=""></img>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Gallery