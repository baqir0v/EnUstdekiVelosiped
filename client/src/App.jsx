import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import ShopPage from "./pages/Shop"
import { SignupForm } from "./pages/SignUp"
import Login from "./pages/Login"
import AddPage from "./pages/AddPage"
import DetailPage from "./pages/Details"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
