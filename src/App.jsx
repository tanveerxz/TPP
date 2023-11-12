import { BrowserRouter } from "react-router-dom";
import {Navbar, Home, OpenPower, Order, Footer} from "./components"


const App= () => {

  return (

    <BrowserRouter>
    <div className="relative z-0 bg-primary select-none">
      <div className="bg-prod-bg bg-cover bg-no-repeat bg-center">
        <Navbar/>
       <Home/>
      </div>
      

      <div className="relative z-0">
        <OpenPower/>
        <Order/>
        {/* <Contact/> */}
        <Footer />
      </div>
    </div>
    </BrowserRouter>
   
  )
}

export default App
