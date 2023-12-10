import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Thumnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export default function PhotoGallery({ images }) {
  const [index, setIndex] = React.useState(-1)

  function PhotoAlbum({ images }) {
    function Photo({ index, image }) {
      return (
        <img
          className="hover:cursor-pointer"
          alt={image.alt}
          src={image.src}
          onClick={() => setIndex(index)}
        />
      )
    }

    return (
      <>
        {images.map((img, index) => (
          <Photo image={img} index={index} />
        ))}
      </>
    )
  }

  return (
    <>
      <div className="overscroll-y-auto columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
        <PhotoAlbum images={images} />
      </div>
      <Lightbox
        open={index > -1}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
        plugins={[Thumnails, Zoom]}
      />
    </>
  )
}
