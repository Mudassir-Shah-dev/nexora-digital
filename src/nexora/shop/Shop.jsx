
import { useState, useEffect } from 'react'
import styles from './Shop.module.css'
import headphones from './headphones.avif'
import watch from './watch.avif'
import speaker from './speaker.avif'
import mobile from './mobile.avif'

import { Heart, Check, ShoppingBag } from 'lucide-react'


const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: headphones,
    alt: "Black wireless over-ear headphones",
    price: 79,
    availability: "In stock"
  },
  {
    id: 2,
    title: "Smartwatch",
    image: watch,
    alt: "Modern smartwatch and phone",
    price: 99,
    availability: "In stock"
  },
  {
    id: 3,
    title: "Portable Speaker",
    image: speaker,
    alt: "Compact gray portable speaker",
    price: 49,
    availability: "In stock"
  },
  {
    id: 4,
    title: "Wireless Charging Stand",
    image: mobile,
    alt: "Phone on a wireless charging stand",
    price: 35,
    availability: "In stock"
  }
]


const Shop = ({ search, onSearchResult }) => {
  const [matchingId, setMatchingId] = useState("")
  const matchingProduct = products.find((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase().trim())
  })

  useEffect(() => {
    if (search.trim() !== "" && matchingProduct) {
      setMatchingId(matchingProduct.id)
      onSearchResult(true)
    } else if (search.trim() !== "") {
      setMatchingId("")
      onSearchResult(false)
    } else {
      setMatchingId("")
    }
  }, [search])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMatchingId("")
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [matchingId])

  const [addToCart, setAddToCart] = useState(null)

  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>

          <div className={styles.top}>
            <div className={styles.first}>
              <p className={styles.popular}>POPULAR RIGHT NOW</p>
              <h1>Featured Products</h1>
            </div>

            <p className={styles.shop}>Shop all products</p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.productGrid}>

              {products.map((product) => (
                <article
                  className={`${styles.productCard} ${
                    product.id === matchingId ? styles.highlighted : ""
                  }`}
                  key={product.id}
                >

                  <div className={styles.productImage}>

                    <img
                      src={product.image}
                      alt={product.alt}
                    />

                    <button
                      className={styles.favorite}
                      type="button"
                      aria-label={`Save ${product.title}`}
                    >
                      <Heart size={20} />
                    </button>

                  </div>

                  <div className={styles.productContent}>

                    <p className={styles.availability}>
                      <span>
                        <Check size={13} />
                      </span>

                      {product.availability}
                    </p>

                    <h3>{product.title}</h3>

                    <p className={styles.price}>
                      ${product.price}
                    </p>

                    <button
                      className={`${styles.button} ${styles.buttonPrimary} ${styles.productButton}`}
                      type="button"
                      onClick={() => setAddToCart(product.id)}
                    >
                      Add to cart
                      <ShoppingBag size={18} />
                    </button>

                    {addToCart === product.id && (
                      <p className={styles.cartMessage} role="status">
                        <Check size={15} />
                        Added to cart successfully
                      </p>
                    )}

                  </div>

                </article>
              ))}

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Shop
