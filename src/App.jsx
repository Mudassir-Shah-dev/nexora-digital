
import { useState, useRef } from 'react'

import './App.css'
import Nav from "./nexora/nav/Nav";
import Hero from "./nexora/hero/Hero";
import Shop from "./nexora/shop/Shop";
import Category from "./nexora/category/Category";
import About from "./nexora/about/About";
import Work from "./nexora/work/Work";
import Support from "./nexora/support/Support";
import Updates from "./nexora/updates/Updates";
import Footer from "./nexora/footer/Footer";

function App() {
  const categoryRef = useRef()
  const shopRef = useRef()
  const aboutRef = useRef()

  const categoryScroll = () => {
    categoryRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const shopScroll = () => {
    shopRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const aboutScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const [search, setSearch] = useState("")
  const handleProductSearch = (search) => {
    setSearch(search)
    shopScroll()

  }
  const [searchMessage, setSearchMessage] = useState("")
  const onSearchResult = (found) => {
    if (found) {
      setSearchMessage("")
    } else {
      setSearchMessage("No products found. Try headphones, smartwatch, or speaker.")
    }
  }

  return (
    <>
      <Nav
        shopScroll={shopScroll}
        categoryScroll={categoryScroll}
        aboutScroll={aboutScroll}
        searchMessage = {searchMessage}
        onProductSearch={handleProductSearch}
      />

      <main>
        <Hero 
        shopScroll = {shopScroll}
        categoryScroll = {categoryScroll} 

        />

        <div ref={categoryRef}>
          <Category />
        </div>

        <div ref={shopRef}>
          <Shop search={search} onSearchResult = {onSearchResult} />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <Work />
        <Support />
        <Updates />
      </main>

      <Footer />
    </>
  )
}

export default App
