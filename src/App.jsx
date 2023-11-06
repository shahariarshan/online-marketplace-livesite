
import { Outlet } from 'react-router-dom'

import Navbar from './Components/layout/Navbar'
import Footer from './Pages/Footer'

function App() {


  return (
    <>
      <>

        
        <div className="mx-auto container">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

        </div>
      </>
    </>
  )
}

export default App
