import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Programme from "./pages/Programme"
import BecomeSponsor from "./pages/BecomeSponsor"
import FAQs from "./pages/FAQs"
import OurApplication from "./pages/OurApplication"
import Training from "./pages/Training"
import IndianMethod from "./pages/IndianMethod"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Programme} path="" />
          <Route Component={Training} path="our-training" />
          <Route Component={IndianMethod} path="indian-method" />
          <Route Component={BecomeSponsor} path="become-sponsor" />
          <Route Component={FAQs} path="faqs" />
          <Route Component={OurApplication} path="our-application" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
