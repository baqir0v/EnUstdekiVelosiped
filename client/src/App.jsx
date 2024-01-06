import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import ShopPage from "./pages/Shop"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
