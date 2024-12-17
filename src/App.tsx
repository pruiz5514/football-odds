
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'


const AppRoutes = () => {
  return(
    <Routes>
      <Route path = '/' element={<Home/>}/>
    </Routes>
  )
}

function App() {

  return (
    <>
      <Header/>
      <AppRoutes/>
    </>
    
  )
}

export default App
