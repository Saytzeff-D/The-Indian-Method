import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Programme from "./pages/Programme"
import BecomeSponsor from "./pages/BecomeSponsor"
import FAQs from "./pages/FAQs"
import OurApplication from "./pages/OurApplication"
import Training from "./pages/Training"
import IndianMethod from "./pages/IndianMethod"
import FoundersAndHistory from "./pages/FoundersAndHistory"
import Welcome from "./pages/Welcome"
import "aos/dist/aos.css"
import { useEffect } from "react"
import AOS from "aos"

function AppRouter() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to={"/welcome"} />} path="" />
          <Route Component={IndianMethod} path="welcome" />
          <Route Component={Training} path="our-training" />
          <Route Component={FoundersAndHistory} path="notice" />
          <Route Component={Welcome} path="indian-method" />
          <Route Component={BecomeSponsor} path="become-sponsor" />
          <Route Component={FAQs} path="faqs" />
          <Route Component={Programme} path="parrainage" />
          <Route Component={OurApplication} path="our-application" />
          <Route element={<Navigate to={"/welcome"} />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
