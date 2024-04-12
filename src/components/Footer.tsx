import MemoDiscord from "./svgs/Discord"
import MemoInstagram from "./svgs/Instagram"
import MemoTiktok from "./svgs/Tiktok"
import MemoYoutube from "./svgs/Youtube"

const Footer = () => {
  return (
    <div>
      <div className="appx pt-16 pb-10 flex justify-between items-center flex-wrap gap-3 gap-x-6">
        <p className="font-dm">Copyright © 2024 Technoméo</p>
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
