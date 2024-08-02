import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"

const carouselPhotos = [
  {
    thumbnail: '/images/thumb1.png',
    src: '/images/main1.png',
    alt: 'Test alt 1',
  },
  {
    thumbnail: '/images/thumb2.png',
    src: '/images/thumb2.png',
    alt: 'Test alt 2',
  },
  {
    thumbnail: '/images/thumb2.png',
    src: '/images/thumb3.png',
    alt: 'Test alt 3',
  },
];

function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active")
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }

export default function Slider() {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
      })
      const [thumbnailRef] = useKeenSlider(
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(instanceRef)]
      )
  return (
    <div className='flex flex-col'>
      <div ref={sliderRef} className="keen-slider">
        {
            carouselPhotos.map((i, ind) => (
                <img  height={80} src={i.src} alt={i.alt} className={`keen-slider__slide number-slide${ind+1}`} key={ind} />
            ))
        }
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
      {
            carouselPhotos.map((i, ind) => (
                <img width={20} src={i.thumbnail} alt={i.alt} className={`keen-slider__slide number-slide${ind+1}`} key={ind} />
            ))
        }
      </div>
    </div>
  )
}