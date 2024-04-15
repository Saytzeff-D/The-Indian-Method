import "./App.css"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import AppRouter from "./Router"

function App() {
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2500)
  }, [])

  const generateAnimationDelay = (index: number) => {
    return { animationDelay: `${index * 0.1}s` } // Adjust delay as needed
  }
  const words = "THE INDIAN METHOD".split(" ")
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={` ${!show ? "" : ""}`}>
        <div
          className={`flex bg-dark items-center justify-center overflow-hidden ${
            !show ? "h-screen" : "h-0"
          }`}
        >
          <div className="relative ">
            <h3 className="cool bg-dark relative z-10 whitespace-nowrap overflow-hidden py-1 flex gap-3 uppercase font-inter text-5xl text-slate-700">
              {words.map((word, index) => (
                <span
                  className="relative"
                  key={index}
                  data-text={word}
                  style={generateAnimationDelay(index)}
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
