
import React from 'react'
import styles from './Updates.module.css'

const Updates = () => {
  return (
    <>
      <section className={styles.updates}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.updateContent}>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              NEXORA updates
            </p>

            <h2>Stay in the loop</h2>

            <p>
              Get product news and useful shopping updates, without the noise.
            </p>
          </div>

          <form className={styles.newsletterForm} noValidate>
            <label htmlFor="email">Email address</label>

            <div className={styles.newsletterControls}>
              <input
                id="email"
                placeholder="you@example.com"
                aria-invalid="false"
                aria-describedby="email-message"
                type="email"
                value=""
              />

              <button
                className={`${styles.button} ${styles.buttonLight}`}
                type="submit"
              >
                Subscribe
              </button>
            </div>

            <p
              id="email-message"
              className={`${styles.formMessage} ${styles.idle}`}
            >
              Prototype only — no email service is connected.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Updates
