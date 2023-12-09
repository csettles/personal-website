import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import './Gallery.css'

export default function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized')
  }

  return (
    <div className='row justify-content-center w-full'>
    <LightGallery
      elementClassNames="col-lg-8 text-center w-2/3"
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      hideControlOnEnd={true}
      hideScrollbar={true}
      loop={false}
      mode="lg-soft-zoom"
    >
      <a href="images/chophouse_row.jpg">
        <img
          alt="chophouse_row"
          src="images/thumbnails/chophouse_row-tmb.jpg"
        />
      </a>
      <a href="images/Scan113920.jpg">
        <img
          alt="Scan113920"
          src="images/thumbnails/Scan113920-tmb.jpg"
        />
      </a>
      <a href="images/Scan113931.jpg">
        <img
          className="img-responsive"
          alt="Scan113931"
          src="images/thumbnails/Scan113931-tmb.jpg"
        />
      </a>
      <a href="images/Scan113939.jpg">
        <img
          className="img-responsive"
          alt="Scan113939"
          src="images/thumbnails/Scan113939-tmb.jpg"
        />
      </a>
      <a href="images/Scan113940.jpg">
        <img
          className="img-responsive"
          alt="Scan113940"
          src="images/thumbnails/Scan113940-tmb.jpg"
        />
      </a>
      <a href="images/Scan113961.jpg">
        <img
          className="img-responsive"
          alt="Scan113961"
          src="images/thumbnails/Scan113961-tmb.jpg"
        />
      </a>
      <a href="images/Scan113973.jpg">
        <img
          className="img-responsive"
          alt="Scan113973"
          src="images/thumbnails/Scan113973-tmb.jpg"
        />
      </a>
      <a href="images/Scan113978.jpg">
        <img
          className="img-responsive"
          alt="Scan113978"
          src="images/thumbnails/Scan113978-tmb.jpg"
        />
      </a>
      <a href="images/Scan113979.jpg">
        <img
          className="img-responsive"
          alt="Scan113979"
          src="images/thumbnails/Scan113979-tmb.jpg"
        />
      </a>
      <a href="images/Scan113984.jpg">
        <img
          className="img-responsive"
          alt="Scan113984"
          src="images/thumbnails/Scan113984-tmb.jpg"
        />
      </a>
      <a href="images/Scan113986.jpg">
        <img
          className="img-responsive"
          alt="Scan113986"
          src="images/thumbnails/Scan113986-tmb.jpg"
        />
      </a>
      <a href="images/Scan114482.jpg">
        <img
          className="img-responsive"
          alt="Scan114482"
          src="images/thumbnails/Scan114482-tmb.jpg"
        />
      </a>
      <a href="images/Scan114494.jpg">
        <img
          className="img-responsive"
          alt="Scan114494"
          src="images/thumbnails/Scan114494-tmb.jpg"
        />
      </a>
      <a href="images/Scan114502.jpg">
        <img
          className="img-responsive"
          alt="Scan114502"
          src="images/thumbnails/Scan114502-tmb.jpg"
        />
      </a>
      <a href="images/Scan114504.jpg">
        <img
          className="img-responsive"
          alt="Scan114504"
          src="images/thumbnails/Scan114504-tmb.jpg"
        />
      </a>
    </LightGallery>
    </div>
  )
}
