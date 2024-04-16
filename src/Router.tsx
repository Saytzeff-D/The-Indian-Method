import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Sponsorship from "./pages/Sponsorship"
import BecomeSponsor from "./pages/BecomeSponsor"
import FAQs from "./pages/FAQs"
import OurApplication from "./pages/OurApplication"
import Training from "./pages/Training"
import Welcome from "./pages/Welcome"
import FoundersAndHistory from "./pages/FoundersAndHistory"
import IndianMethod from "./pages/IndianMethod"
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
          <Route Component={Welcome} path="welcome" />
          <Route Component={Training} path="our-training" />
          <Route Component={FoundersAndHistory} path="/who-we-are" />
          <Route Component={IndianMethod} path="indian-method" />
          <Route Component={BecomeSponsor} path="become-sponsor" />
          <Route Component={FAQs} path="faqs" />
          <Route Component={Sponsorship} path="sponsorship" />
          <Route Component={OurApplication} path="our-application" />
          <Route element={<Navigate to={"/welcome"} />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
