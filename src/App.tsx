
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'


const AppRoutes = () => {
  return(
    <Routes>
      <Route path = '/' element={<Home/>}/>
    </Routes>
  )
}

function App() {

  return (
    <AppRoutes/>
  )
}

export default App
