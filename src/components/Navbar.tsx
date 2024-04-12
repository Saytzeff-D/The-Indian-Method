import { useState } from "react"
import logo from "../assets/logo.png"
import { useLocation } from "react-router"
import { navLinks } from "../utils/constants"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <div className="py-4 hidden lg:block">
        <div className="items-center flex flex-col gap-3">
          <div>
            <img className="w-28 rm-drag" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div
        className={`sticky transition-all duration-500 z-40 top-0 bg-white shadow overflow-hidden ${
          navIsOpen ? "h-[30rem] lg:h-auto" : "h-[5.6rem] lg:h-auto"
        }`}
      >
        <div className="flex py-4 appx items-center justify-between lg:hidden">
          <img className="w-16 rm-drag" src={logo} alt="logo" />
          <button onClick={() => setNavIsOpen(!navIsOpen)}>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`flex flex-col lg:flex-row ${
            navIsOpen ? "" : ""
          } px-5 lg:text-center lg:items-center gap-2 lg:gap-6 justify-center py-5`}
        >
          {navLinks.map((each) => (
            <Link
              to={each.path}
              className={`${
                pathname == each.path
                  ? "bg-dark text-white font-semibold text-sm"
                  : ""
              } font-dm py-2.5 transition rounded-full px-5`}
              key={each.label}
            >
              {each.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
