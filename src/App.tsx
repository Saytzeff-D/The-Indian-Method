import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Programme from "./pages/Programme"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Programme} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
