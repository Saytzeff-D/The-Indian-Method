import { Link } from "react-router-dom"
import MemoDiscord from "./svgs/Discord"
import MemoInstagram from "./svgs/Instagram"
import MemoTiktok from "./svgs/Tiktok"
import MemoYoutube from "./svgs/Youtube"
import { links } from "../utils/constants"

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="appx pt-16 pb-10 flex justify-center sm:justify-between items-center flex-wrap gap-3 gap-x-6">
        <p className="font-dm">
          Copyright © {new Date().getFullYear()} Technoméo
        </p>
        <div className="flex items-center gap-4 justify-center w-fit">
          <Link
            to={links.instagram}
            target="_blank"
            className="text-white hover:text-slate-300 transition"
          >
            <MemoInstagram />
          </Link>
          <Link
            to={links.discord}
            target="_blank"
            className="text-white hover:text-slate-300 transition"
          >
            <MemoDiscord />
          </Link>
          <Link
            to={links.youtube}
            target="_blank"
            className="text-white hover:text-slate-300 transition"
          >
            <MemoYoutube />
          </Link>
          <Link
            to={links.tiktok}
            target="_blank"
            className="text-white hover:text-slate-300 transition"
          >
            <MemoTiktok />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
