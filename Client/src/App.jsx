import { Route, Routes } from "react-router-dom"
import Header from "./partials/Header"
import HomePage from "./pages/HomePage"



function App() {

  return (
    <main className="overflow-hidden">

      <Header />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>

    </main>
  )
}

export default App
