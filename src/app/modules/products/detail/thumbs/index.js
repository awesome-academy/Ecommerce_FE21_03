import React from 'react';


const ThumbImageItem = ({ image }) => {
  return (
    <a className="thumbs__image" href="/">
      <span><img src={image} alt="title" /></span>
    </a>
  )
}

const ProductsDetailThumbs = ({ imageUrl, images = [] }) => {

  const renderImage = images => {
    return images.map((image, index) => {
      return <ThumbImageItem key={index} image={image} />
    })
  }

  return (
    <>
      <div className="thumbs">
        {images && renderImage(images)}
      </div>
      <div className="big">
        <span className="big-image">
          <img src={imageUrl} alt="title" />
        </span>
      </div>
    </>
  )
}

export default ProductsDetailThumbs;
