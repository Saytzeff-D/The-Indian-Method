// import { useState } from "react"
import logo from "../assets/logo.png"
import { useLocation } from "react-router"
import { navLinks } from "../utils/constants"
import { Link } from "react-router-dom"

const Navbar = () => {
  // const [navIsOpen, setNavIsOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <div className="py-4">
        <div className="items-center flex flex-col gap-3">
          <div>
            <img className="w-28 rm-drag" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex z-40 bg-white px-5 text-center sticky top-0 items-center gap-6 justify-center py-5">
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
    </>
  )
}

export default Navbar
