import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
        <Header/>
         <Home/>
        <Footer/>
    </Fragment>
  )
}

export default App
