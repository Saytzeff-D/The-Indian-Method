import { useRef } from "react"
import Review from "./Review"
import MemoScrollArrow from "./svgs/ScrollArrow"

const ReviewsContainer = ({
  reviews,
}: {
  reviews: { name: string; label: string; desc: string }[]
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const scroll = (value: number) => {
    if (
      scrollContainer.current !== null &&
      scrollContainer.current !== undefined
    ) {
      scrollContainer.current.scrollLeft += value
    }
  }
  return (
    <div className="relative max-w-full">
      <button
        onClick={() => scroll(-200)}
        className="mx-auto hidden lg:block min-w-[2rem] absolute -left-6 xl:-left-16 bottom-56 z-20 rotate-180"
      >
        <MemoScrollArrow />
      </button>
      <button
        onClick={() => scroll(200)}
        className="mx-auto hidden lg:block min-w-[2rem] absolute -right-6 xl:-right-16 bottom-56 z-20"
      >
        <MemoScrollArrow />
      </button>
      <div className="flex overflow-hidden gap-5">
        <div
          ref={scrollContainer}
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex scroll-smooth gap-5 pb-20 overflow-auto no-scrollbar pt-3"
        >
          {reviews.map((each) => (
            <Review {...each} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewsContainer
