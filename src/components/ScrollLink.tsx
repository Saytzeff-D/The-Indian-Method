import { ReactNode } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { scroller } from "react-scroll"

interface LinkI {
  className?: string
  to: string
  scrollOn?: string | null | undefined // on which route should it scroll
  children: ReactNode
}

const config = {
  spy: true,
  smooth: "easeInOutCubic",
  offset: -100,
  duration: 200,
  activeClass: "text-primary",
}

const ScrollLink = ({ to, children, scrollOn, ...props }: LinkI) => {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollOutside = async () => {
    if (location.pathname !== scrollOn) await navigate(scrollOn ?? "/")
    scroller.scrollTo(to, { ...config })
  }
  return (
    <>
      <span onClick={scrollOn ? scrollOutside : () => navigate(to)} {...props}>
        {children}
      </span>
      <Link to={scrollOn || to} className="hidden">
        {children}
      </Link>
    </>
  )
}

export default ScrollLink
