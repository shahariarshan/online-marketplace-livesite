
import { Outlet } from 'react-router-dom'
import MainLayOut from './Components/layout/MainLayOut'

function App() {
  

  return (
    <>
       <>
      
      <MainLayOut>
        <Outlet></Outlet>
      </MainLayOut>
        
    </>
    </>
  )
}

export default App
