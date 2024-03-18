import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import About from "./pages/About"



function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/about'} element={<About />}/>
        <Route path={'/sign-in'} element={<SignIn />}/>
        <Route path={'/sign-up'} element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
