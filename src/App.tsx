import "./App.css"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import AppRouter from "./Router"
import AOS from "aos"

function App() {
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
      setTimeout(() => {
        AOS.refresh()
      }, 700)
    }, 2500)
  }, [])

  const words = "THE INDIAN METHOD".split(" ")
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={` ${!show ? "" : ""}`}>
        <div
          className={`flex bg-dark transition-all duration-700 items-center justify-center overflow-hidden ${
            !show ? "h-screen" : "h-0"
          }`}
        >
          <div className="relative ">
            <h3 className="cool bg-dark overflow-hidden relative z-10 py-1 flex  items-center justify-center gap-3 uppercase font-inter text-3xl sm:text-5xl text-slate-400">
              {words.map((word, index) => (
                <span
                  className="relative"
                  key={index + "span"}
                  data-text={word}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}
                </span>
              ))}
            </h3>
            <span className="stroke skew-x-[25deg] left-1/2 top-1/2 -rotate-[60deg] -translate-x-1/2 -translate-y-1/2 absolute h-1.5 bg-white"></span>
          </div>
        </div>
        <>
          {show && (
            <div className="fade">
              <AppRouter />
            </div>
          )}
        </>
      </div>
      {/* <div className={`${!show ? "hidden" : "block"}`}> */}
      {/* </div> */}
    </>
  )
}

export default App
