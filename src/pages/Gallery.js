import PhotoGallery from '../components/PhotoGallery'

const images = [
  { src: 'gallery/Scan113919.jpg', alt: 'Scan113919' },
  { src: 'gallery/Scan113931.jpg', alt: 'Scan113931' },
  { src: 'gallery/Scan113925.jpg', alt: 'Scan113925' },
  { src: 'gallery/Scan114496.jpg', alt: 'Scan114496' },
  { src: 'gallery/Scan114482.jpg', alt: 'Scan114482' },
  { src: 'gallery/Scan114483.jpg', alt: 'Scan114483' },
  { src: 'gallery/Scan114497.jpg', alt: 'Scan114497' },
  { src: 'gallery/Scan113924.jpg', alt: 'Scan113924' },
  { src: 'gallery/Scan113930.jpg', alt: 'Scan113930' },
  { src: 'gallery/Scan113918.jpg', alt: 'Scan113918' },
  { src: 'gallery/Scan113926.jpg', alt: 'Scan113926' },
  { src: 'gallery/Scan113932.jpg', alt: 'Scan113932' },
  { src: 'gallery/Scan114481.jpg', alt: 'Scan114481' },
  { src: 'gallery/Scan114495.jpg', alt: 'Scan114495' },
  { src: 'gallery/Scan114494.jpg', alt: 'Scan114494' },
  { src: 'gallery/Scan114480.jpg', alt: 'Scan114480' },
  { src: 'gallery/Scan113933.jpg', alt: 'Scan113933' },
  { src: 'gallery/Scan113927.jpg', alt: 'Scan113927' },
  { src: 'gallery/Scan113923.jpg', alt: 'Scan113923' },
  { src: 'gallery/Scan113937.jpg', alt: 'Scan113937' },
  { src: 'gallery/Scan114484.jpg', alt: 'Scan114484' },
  { src: 'gallery/Scan114490.jpg', alt: 'Scan114490' },
  { src: 'gallery/Scan114491.jpg', alt: 'Scan114491' },
  { src: 'gallery/Scan114485.jpg', alt: 'Scan114485' },
  { src: 'gallery/Scan113936.jpg', alt: 'Scan113936' },
  { src: 'gallery/Scan113922.jpg', alt: 'Scan113922' },
  { src: 'gallery/Scan113934.jpg', alt: 'Scan113934' },
  { src: 'gallery/Scan113920.jpg', alt: 'Scan113920' },
  { src: 'gallery/Scan114493.jpg', alt: 'Scan114493' },
  { src: 'gallery/Scan114487.jpg', alt: 'Scan114487' },
  { src: 'gallery/Scan114478.jpg', alt: 'Scan114478' },
  { src: 'gallery/Scan114479.jpg', alt: 'Scan114479' },
  { src: 'gallery/Scan114486.jpg', alt: 'Scan114486' },
  { src: 'gallery/Scan114492.jpg', alt: 'Scan114492' },
  { src: 'gallery/Scan113909.jpg', alt: 'Scan113909' },
  { src: 'gallery/Scan113921.jpg', alt: 'Scan113921' },
  { src: 'gallery/Scan113935.jpg', alt: 'Scan113935' },
  { src: 'gallery/Scan113985.jpg', alt: 'Scan113985' },
  { src: 'gallery/Scan113984.jpg', alt: 'Scan113984' },
  { src: 'gallery/Scan113953.jpg', alt: 'Scan113953' },
  { src: 'gallery/Scan113979.jpg', alt: 'Scan113979' },
  { src: 'gallery/Scan113986.jpg', alt: 'Scan113986' },
  { src: 'gallery/Scan113987.jpg', alt: 'Scan113987' },
  { src: 'gallery/Scan113978.jpg', alt: 'Scan113978' },
  { src: 'gallery/Scan113940.jpg', alt: 'Scan113940' },
  { src: 'gallery/Scan113954.jpg', alt: 'Scan113954' },
  { src: 'gallery/Scan113968.jpg', alt: 'Scan113968' },
  { src: 'gallery/Scan113983.jpg', alt: 'Scan113983' },
  { src: 'gallery/Scan113982.jpg', alt: 'Scan113982' },
  { src: 'gallery/Scan113969.jpg', alt: 'Scan113969' },
  { src: 'gallery/Scan113955.jpg', alt: 'Scan113955' },
  { src: 'gallery/Scan113957.jpg', alt: 'Scan113957' },
  { src: 'gallery/Scan113980.jpg', alt: 'Scan113980' },
  { src: 'gallery/Scan113981.jpg', alt: 'Scan113981' },
  { src: 'gallery/Scan113956.jpg', alt: 'Scan113956' },
  { src: 'gallery/Scan113973.jpg', alt: 'Scan113973' },
  { src: 'gallery/Scan113967.jpg', alt: 'Scan113967' },
  { src: 'gallery/Scan113966.jpg', alt: 'Scan113966' },
  { src: 'gallery/Scan113972.jpg', alt: 'Scan113972' },
  { src: 'gallery/Scan113958.jpg', alt: 'Scan113958' },
  { src: 'gallery/Scan113964.jpg', alt: 'Scan113964' },
  { src: 'gallery/Scan113970.jpg', alt: 'Scan113970' },
  { src: 'gallery/Scan113971.jpg', alt: 'Scan113971' },
  { src: 'gallery/Scan113965.jpg', alt: 'Scan113965' },
  { src: 'gallery/Scan113959.jpg', alt: 'Scan113959' },
  { src: 'gallery/Scan113961.jpg', alt: 'Scan113961' },
  { src: 'gallery/Scan113975.jpg', alt: 'Scan113975' },
  { src: 'gallery/Scan113974.jpg', alt: 'Scan113974' },
  { src: 'gallery/Scan113960.jpg', alt: 'Scan113960' },
  { src: 'gallery/Scan113976.jpg', alt: 'Scan113976' },
  { src: 'gallery/Scan113962.jpg', alt: 'Scan113962' },
  { src: 'gallery/Scan113989.jpg', alt: 'Scan113989' },
  { src: 'gallery/Scan113988.jpg', alt: 'Scan113988' },
  { src: 'gallery/Scan113963.jpg', alt: 'Scan113963' },
  { src: 'gallery/Scan113977.jpg', alt: 'Scan113977' },
  { src: 'gallery/Scan114500.jpg', alt: 'Scan114500' },
  { src: 'gallery/Scan113938.jpg', alt: 'Scan113938' },
  { src: 'gallery/Scan113910.jpg', alt: 'Scan113910' },
  { src: 'gallery/Scan114474.jpg', alt: 'Scan114474' },
  { src: 'gallery/Scan114475.jpg', alt: 'Scan114475' },
  { src: 'gallery/Scan113911.jpg', alt: 'Scan113911' },
  { src: 'gallery/Scan113939.jpg', alt: 'Scan113939' },
  { src: 'gallery/Scan114501.jpg', alt: 'Scan114501' },
  { src: 'gallery/Scan114503.jpg', alt: 'Scan114503' },
  { src: 'gallery/Scan113913.jpg', alt: 'Scan113913' },
  { src: 'gallery/Scan114488.jpg', alt: 'Scan114488' },
  { src: 'gallery/Scan114477.jpg', alt: 'Scan114477' },
  { src: 'gallery/Scan114476.jpg', alt: 'Scan114476' },
  { src: 'gallery/Scan114489.jpg', alt: 'Scan114489' },
  { src: 'gallery/Scan113912.jpg', alt: 'Scan113912' },
  { src: 'gallery/Scan114502.jpg', alt: 'Scan114502' },
  { src: 'gallery/Scan114506.jpg', alt: 'Scan114506' },
  { src: 'gallery/Scan113916.jpg', alt: 'Scan113916' },
  { src: 'gallery/Scan114499.jpg', alt: 'Scan114499' },
  { src: 'gallery/Scan114472.jpg', alt: 'Scan114472' },
  { src: 'gallery/Scan114473.jpg', alt: 'Scan114473' },
  { src: 'gallery/Scan114498.jpg', alt: 'Scan114498' },
  { src: 'gallery/Scan113917.jpg', alt: 'Scan113917' },
  { src: 'gallery/Scan114505.jpg', alt: 'Scan114505' },
  { src: 'gallery/Scan113915.jpg', alt: 'Scan113915' },
  { src: 'gallery/Scan113929.jpg', alt: 'Scan113929' },
  { src: 'gallery/Scan114471.jpg', alt: 'Scan114471' },
  { src: 'gallery/Scan113928.jpg', alt: 'Scan113928' },
  { src: 'gallery/Scan113914.jpg', alt: 'Scan113914' },
  { src: 'gallery/Scan114504.jpg', alt: 'Scan114504' },
]
export default function Gallery() {
  return <PhotoGallery images={images} />
}
