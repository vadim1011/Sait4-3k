import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Page1 from './Page1/page1'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element ={<Page1/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
