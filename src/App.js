import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./Component/Home"
import Gallery from "./Component/Gallery"
import Services from "./Component/Services"
import AboutUs from "./Component/AboutUs"
import Contact from "./Component/Contact"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App