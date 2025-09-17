import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { User } from './components/User'
import { Category } from './components/Category'
import { Home } from './components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path="/products/:category/:id" element={<Category></Category>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
