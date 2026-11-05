
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerMain}`}>
          <div className={styles.footerBrand}>
            <a
              className={`${styles.logo} ${styles.logoLight}`}
              href="#top"
              aria-label="NEXORA home"
            >
              <span>N</span>NEXORA
            </a>

            <p className={styles.first}>
              Practical tech and everyday accessories, selected to make shopping simpler.
            </p>

            <div className={styles.socials}>
              <a href="#top" aria-label="Instagram">ig</a>
              <a href="#top" aria-label="Facebook">f</a>
              <a href="#top" aria-label="Pinterest">p</a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3>Shop</h3>
            <a href="#products">New arrivals</a>
            <a href="#products">Featured products</a>
            <a href="#products">Categories</a>
          </div>

          <div className={styles.footerLinks}>
            <h3>Support</h3>
            <a href="#products">Contact us</a>
            <a href="#faq">FAQs</a>
            <a href="#products">Order tracking</a>
          </div>

          <div className={styles.footerLinks}>
            <h3>About</h3>
            <a href="#products">Our approach</a>
            <a href="#products">Accessibility</a>
            <a href="#products">Contact</a>
          </div>
        </div>

        <div className={`${styles.container} ${styles.footerBottom}`}>
          <p>© 2025 NEXORA. Prototype storefront.</p>

          <div>
            <a href="#top">Privacy policy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
