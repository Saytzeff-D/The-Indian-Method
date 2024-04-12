import MemoDiscord from "./svgs/Discord"
import MemoInstagram from "./svgs/Instagram"
import MemoTiktok from "./svgs/Tiktok"
import MemoYoutube from "./svgs/Youtube"

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="appx pt-16 pb-10 flex justify-between items-center flex-wrap gap-3 gap-x-6">
        <p className="font-dm">
          Copyright © {new Date().getFullYear()} Technoméo
        </p>
        <div className="flex items-center gap-4 justify-center w-fit">
          <MemoInstagram />
          <MemoDiscord />
          <MemoYoutube />
          <MemoTiktok />
        </div>
      </div>
    </div>
  )
}

export default Footer
