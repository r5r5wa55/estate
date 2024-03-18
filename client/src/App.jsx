import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"



function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/sign-up'} element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
