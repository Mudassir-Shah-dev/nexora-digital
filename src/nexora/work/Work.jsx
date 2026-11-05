
import React from 'react'
import styles from './Work.module.css'

const Work = () => {
  return (
    <>
      <section className={`${styles.work} ${styles.section}`}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.processIntro}>
            <p className={styles.eyebrow}>How it works</p>

            <h2>From discovery to checkout in three clear steps.</h2>

            <p>
              Take your time, compare your options, and stay in control throughout the process.
            </p>
          </div>

          <ol className={styles.steps}>
            <li>
              <span>01</span>
              <div>
                <h3>Discover your product</h3>
                <p>Browse categories or explore our featured selection.</p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <h3>Choose the right option</h3>
                <p>Review product details and pricing before you decide.</p>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <h3>Review and continue</h3>
                <p>Check your cart, update quantities, and continue when ready.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}

export default Work
