import { Routes, Route, Link } from "react-router-dom"
import { lazy, Suspense } from "react"
import MyCustomerSpinner from "./Components/MyCustomerSpinner"
import Bar from "./Components/Bar"
import data from "./Components/data"
import Footer from "./Components/Footer"

{/*import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import ProductsPage from './Components/ProductsPage'*/}
import './App.css'


const HomePage = lazy(()=> import("./Components/HomePage"))
const AboutPage = lazy(()=> import("./Components/AboutPage"))
const ContactsPage = lazy(()=> import("./Components/ContactsPage"))
const ProductsPage = lazy(()=> import("./Components/ProductsPage"))

function App() {

  return (
    <>
    <Bar />
    <Suspense fallback={<MyCustomerSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contacts" element={<ContactsPage />}/>
        <Route path="/products" element={<ProductsPage data={data}/>}/>
      </Routes>
    </Suspense>
    <Footer />
    </>
  )
}

export default App
